import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NewsListScreen } from '../screens/newsListScreen';
import { FavoriteNewsListScreen } from '../screens/favoriteNewsListScreen';
import { TabIcon } from '../components/tabIcon';

const BottomTab = createBottomTabNavigator();

export const NewsTabNavigation = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color }) => {
          const getIconName = () => {
            if (route.name === 'FavoriteNewsListScreen') {
              return 'star';
            }

            return 'home';
          };

          const iconName = getIconName();

          return <TabIcon iconName={iconName} iconColor={color} />;
        },
      })}
    >
      <BottomTab.Screen name="NewsListScreen" component={NewsListScreen} />
      <BottomTab.Screen
        name="FavoriteNewsListScreen"
        component={FavoriteNewsListScreen}
      />
    </BottomTab.Navigator>
  );
};
