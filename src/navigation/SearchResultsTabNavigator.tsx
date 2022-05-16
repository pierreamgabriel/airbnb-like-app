import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/SearchResults';
import SearchResultsMaps from '../screens/SearchResultsMaps';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: '#f15454',
            tabBarIndicatorStyle: {
                backgroundColor: '#f15454'
            }
        }}>
            <Tab.Screen name={'list'} component={SearchResults} />
            <Tab.Screen name={'map'} component={SearchResultsMaps} />
        </Tab.Navigator>
    );
};

export default SearchResultsTabNavigator;