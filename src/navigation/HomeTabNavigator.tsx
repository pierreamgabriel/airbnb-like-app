import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ExploreNavigator from './ExploreNavigator';

const Tab = createBottomTabNavigator();


const HomeTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: '#f15454'
        }}>
            <Tab.Screen
                name={"Explore"}
                component={ExploreNavigator}
                options={{
                    tabBarIcon: ({ color }: {color: string}) => (
                        <Fontisto name="search" size={25} color={color} />
                    ),
                    headerShown: false
                }} />

            <Tab.Screen
                name={"Saved"}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }: {color: string}) => (
                        <FontAwesome name="heart-o" size={25} color={color} />
                    )
                }} />

            <Tab.Screen
                name={"Airbnb"}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }: {color: string}) => (
                        <FontAwesome5 name="airbnb" size={25} color={color} />
                    )
                }} />

            <Tab.Screen
                name={"Messages"}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }: {color: string}) => (
                        <Feather name="message-square" size={25} color={color} />
                    )
                }} />

            <Tab.Screen
                name={"Profile"}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }: {color: string}) => (
                        <EvilIcons name="user" size={25} color={color} />
                    )
                }} />

        </Tab.Navigator>
    );
};

export default HomeTabNavigator;