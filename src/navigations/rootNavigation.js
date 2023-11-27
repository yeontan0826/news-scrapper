import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NewsTabNavigation } from './newsTabNavigation';
import { NewsDetailScreen } from '../screens/newsDetailScreen';

const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="NewsTabNavigation" component={NewsTabNavigation} />
      <Stack.Screen name="NewsDetailScreen" component={NewsDetailScreen} />
    </Stack.Navigator>
  );
};
