import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import PlaceToStay from '../components/PlaceToStay';
import SearchResults from '../screens/SearchResults';
import DestinationSearch from '../screens/DestinationSearch';
import Guests from '../screens/Guests';
import HomeTabNavigator from './HomeTabNavigator';
import PlaceToStayScreen from '../screens/PlaceToStayScreen';

export type StackParams = {
  Home: undefined;
  PlaceToStay: undefined;
  SearchResults: undefined;
  DestinationSearch: undefined;
  Guests: undefined;
  PlaceToStayScreen: {
    placeId: string
  };
  Explore: {
    screen: string
  }
}

const Stack = createNativeStackNavigator<StackParams>();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="PlaceToStay" component={PlaceToStay} options={{ headerShown: false }} />
        <Stack.Screen name="SearchResults" component={SearchResults} options={{ headerShown: false }} />
        <Stack.Screen name="DestinationSearch" component={DestinationSearch} options={{ title: 'Search your destination' }} />
        <Stack.Screen name="Guests" component={Guests} options={{ title: 'How many people?' }} />
        <Stack.Screen name="PlaceToStayScreen" component={PlaceToStayScreen} options={{ title: 'Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;