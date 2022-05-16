import { View, Text } from 'react-native';
import React from 'react';
import DetailedPlaceToStay from '../../components/DetailedPlaceToStay';
import places from '../../../assets/data/feed';
import { useRoute, RouteProp } from '@react-navigation/core';


const PlaceToStayScreen = () => {
    const route: RouteProp<{params: {placeId: string}}, 'params'> = useRoute();
    const findPlace = places.find(place => place.id === route.params.placeId);
    const place = findPlace ? findPlace : {
    id: "",
    image: "",
    bed: 0,
    bedroom: 0,
    type: "",
    title: "",
    newPrice: 0,
    oldPrice: 0,
    totalPrice: 0,
    description: ""
    };
    return (
        <View>
            <DetailedPlaceToStay placeToStay={place} />
        </View>
    );
};

export default PlaceToStayScreen;