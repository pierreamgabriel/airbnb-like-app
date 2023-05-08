import {View, Text} from 'react-native';
import React from 'react';
import {Marker} from 'react-native-maps';
import styles from './styles';

interface IProps {
  coordinate: {
    latitude: number;
    longitude: number;
  };
  price: number;
  isSelected: boolean;
  onPress: () => void;
}
const CustomMarker = (props: IProps) => {
  const {coordinate, price, isSelected, onPress} = props;
  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View style={styles(isSelected).container}>
        <Text style={styles(isSelected).text}>${price}</Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;
