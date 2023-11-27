import { useCallback } from 'react';
import { View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import WebView from 'react-native-webview';

import { Header } from '../components/header/header';
import { Spacer } from '../components/spacer';
import { clipNewsItem } from '../redux/actions/news';

export const NewsDetailScreen = () => {
  const navigation = useNavigation();
  const routes = useRoute();
  const dispatch = useDispatch();

  const onPress = useCallback(() => {
    navigation.goBack();
  }, []);

  const onPressFavorite = useCallback(() => {
    dispatch(clipNewsItem(routes.params.newsItem));
  }, []);

  const isClipped = useSelector(
    (state) =>
      state.news.favoriteNews.filter(
        (item) => item.link === routes.params.newsItem.link
      ).length > 0
  );

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Icon name="arrow-back" onPress={onPress} />
          <Spacer horizontal space={12} />
          <View style={{ maxWidth: 200 }}>
            <Header.Title title="NEW_DETAIL" />
          </View>
        </Header.Group>
        <Header.Icon
          name={isClipped ? 'heart' : 'heart-outline'}
          onPress={onPressFavorite}
        />
      </Header>
      <WebView
        style={{ flex: 1 }}
        source={{ uri: routes.params.newsItem.link }}
      />
    </View>
  );
};
