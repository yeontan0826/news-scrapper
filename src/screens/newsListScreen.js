import { useCallback, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

import { Header } from '../components/header/header';
import { SingleLineInput } from '../components/singleLineInput';
import { getNewsList } from '../redux/actions/news';
import { Typography } from '../components/typography';
import { Button } from '../components/button';

export const NewsListScreen = () => {
  const navigation = useNavigation();
  const newsList = useSelector((state) => state.news.newsList);
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  const onSubmitEditing = useCallback(() => {
    if (query === '') return;

    dispatch(getNewsList(query));
  }, [query]);

  const onPressListItem = useCallback((newsItem) => {
    navigation.navigate('NewsDetailScreen', { newsItem });
  }, []);

  const renderItem = ({ item }) => {
    return (
      <Button onPress={() => onPressListItem(item)}>
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
        <Header.Title title="NEWS_LIST" />
      </Header>
      <View style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 24, paddingVertical: 12 }}>
          <SingleLineInput
            value={query}
            onChangeText={setQuery}
            placeholder="뉴스 검색어를 입력해 주세요"
            onSubmitEditing={onSubmitEditing}
          />
        </View>
        <FlatList style={{ flex: 1 }} data={newsList} renderItem={renderItem} />
      </View>
    </View>
  );
};

const ItemContainer = styled.View`
  flex: 1;
  padding: 8px 20px;
`;
