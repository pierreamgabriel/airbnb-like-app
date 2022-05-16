import { View, Text } from 'react-native';
import React from 'react';
import { Marker } from 'react-native-maps';

interface IProps {
    coordinate: {
        latitude: number;
        longitude: number;
    },
    price: number,
    isSelected: boolean,
    onPress: () => void
}
const CustomMarker = (props: IProps) => {
    const { coordinate, price, isSelected, onPress } = props;
    return (
        <Marker
            coordinate={coordinate}
            onPress={onPress}
        >
            <View style={{
                backgroundColor: isSelected ? 'black' : 'white',
                padding: 5,
                borderColor: 'grey',
                borderWidth: 1,
                borderRadius: 20

            }}>
                <Text style={{
                    fontWeight: 'bold',
                    color: isSelected ? 'white' : 'black'
                }}>${price}</Text>
            </View>
        </Marker>
    );
};

export default CustomMarker;