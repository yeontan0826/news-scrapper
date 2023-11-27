import { useCallback, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';

import { Header } from '../components/header/header';
import { Button } from '../components/button';
import { Typography } from '../components/typography';
import { clippedTabFocus } from '../redux/actions/news';

export const FavoriteNewsListScreen = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.news.favoriteNews);

  const onPressItem = useCallback((newsItem) => {
    navigation.navigate('NewsDetailScreen', { newsItem });
  }, []);

  useEffect(() => {
    if (isFocused) {
      dispatch(clippedTabFocus());
    }
  }, [isFocused]);

  const renderItem = ({ item }) => {
    return (
      <Button onPress={() => onPressItem(item)}>
        <ItemContainer>
          <Typography fontSize={24} numOfLines={1}>
            {item.title}
          </Typography>
          <Typography fontSize={16} numOfLines={2} color="gray">
            {item.description}
          </Typography>
        </ItemContainer>
      </Button>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title="FAVORITE_NEWS_LIST" />
      </Header>
      <FlatList style={{ flex: 1 }} data={data} renderItem={renderItem} />
    </View>
  );
};

const ItemContainer = styled.View`
  flex: 1;
  padding: 8px 20px;
`;
