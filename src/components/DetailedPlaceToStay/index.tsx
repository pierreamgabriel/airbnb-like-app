import { Text, Image, ScrollView } from 'react-native'
import React from 'react';
import styles from './styles';
import { IPlace } from '../PlaceToStay';

interface _IPlace  {
placeToStay: IPlace["placeToStay"] & {
    description: string
}
}

const PlaceToStay = (props: _IPlace) => {

    const data = props.placeToStay;
    return (
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={{ uri: data.image }} />
            <Text style={styles.bedroom}>{data.bed} bed {data.bedroom} bedroom</Text>
            <Text style={styles.description} numberOfLines={2}>{data.type}. {data.title}.</Text>
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>${data.oldPrice} </Text>
                <Text style={styles.newPrice}> ${data.newPrice}</Text>
                / night
            </Text>
            <Text style={styles.totalPrice}>${data.totalPrice} total</Text>
            <Text style={styles.longDescription}>{data.description}</Text>
        </ScrollView>
    )
}

export default PlaceToStay;