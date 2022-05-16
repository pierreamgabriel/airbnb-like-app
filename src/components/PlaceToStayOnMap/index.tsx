import React from 'react';
import { View, Text, Image, useWindowDimensions, Pressable } from 'react-native'
import styles from './styles';
import { useNavigation } from '@react-navigation/core';
import { IPlace } from '../PlaceToStay';
import { StackParams } from '../../navigation/Router';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


const PlaceToStayOnMap = (props: IPlace) => {

    const data = props.placeToStay;
    const width = useWindowDimensions().width;

    const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
    const goToDetails = () => {
        navigation.navigate('PlaceToStayScreen', {placeId: data.id});
    };

    return (
        <Pressable onPress={goToDetails} style={[styles.container, {width: width - 60}]}>
            <View style={styles.innerContainer}>
            <Image style={styles.image} source={{ uri: data.image }} />
            <View style={styles.textContainer}>
            <Text style={styles.bedroom}>{data.bed} bed {data.bedroom} bedroom</Text>
            <Text style={styles.description} numberOfLines={2}>{data.type}. {data.title}</Text>
            <Text style={styles.prices}>
                <Text style={styles.newPrice}> ${data.newPrice}</Text>
                / night
            </Text>
            </View>
            </View>
        </Pressable>
    )
}

export default PlaceToStayOnMap;