import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ExploreNavigator from './ExploreNavigator';

const Tab = createBottomTabNavigator();

const searchIcon = (color: string) => (
  <Fontisto name="search" size={25} color={color} />
);

const heartIcon = (color: string) => (
  <FontAwesome name="heart-o" size={25} color={color} />
);

const airbnbIcon = (color: string) => (
  <FontAwesome5 name="airbnb" size={25} color={color} />
);

const messageIcon = (color: string) => (
  <Feather name="message-square" size={25} color={color} />
);

const userIcon = (color: string) => (
  <EvilIcons name="user" size={25} color={color} />
);

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#f15454',
      }}>
      <Tab.Screen
        name={'Explore'}
        component={ExploreNavigator}
        options={{
          tabBarIcon: ({color}: {color: string}) => searchIcon(color),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name={'Saved'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}: {color: string}) => heartIcon(color),
        }}
      />

      <Tab.Screen
        name={'Airbnb'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}: {color: string}) => airbnbIcon(color),
        }}
      />

      <Tab.Screen
        name={'Messages'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}: {color: string}) => messageIcon(color),
        }}
      />

      <Tab.Screen
        name={'Profile'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}: {color: string}) => userIcon(color),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
