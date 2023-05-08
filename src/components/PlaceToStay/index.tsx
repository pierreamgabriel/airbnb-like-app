import {Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';
import {StackParams} from '../../navigation/Router';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export interface IPlace {
  placeToStay: {
    id: string;
    image: string;
    bed: number;
    bedroom: number;
    type: string;
    title: string;
    newPrice: number;
    oldPrice: number;
    totalPrice: number;
  };
}

const PlaceToStay = (props: IPlace) => {
  const data = props.placeToStay;

  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const goToDetails = () => {
    navigation.navigate('PlaceToStayScreen', {placeId: data.id});
  };
  return (
    <Pressable onPress={goToDetails} style={styles.container}>
      <Image style={styles.image} source={{uri: data.image}} />
      <Text style={styles.bedroom}>
        {data.bed} bed {data.bedroom} bedroom
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {data.type}. {data.title}.
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${data.oldPrice} </Text>
        <Text style={styles.newPrice}> ${data.newPrice}</Text>/ night
      </Text>
      <Text style={styles.totalPrice}>${data.totalPrice} total</Text>
    </Pressable>
  );
};

export default PlaceToStay;
