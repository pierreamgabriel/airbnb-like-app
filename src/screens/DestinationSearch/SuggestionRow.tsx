import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

interface Item {
    item: {
        description?: string
    }
}

const SuggestionRow = ({ item }: Item ) => {
    return (
        <View style={styles.row}>
            <View style={styles.iconContainer}>
                <Entypo name={"location-pin"} size={25} />
            </View>
            <Text style={styles.location}>{item.description}</Text>
        </View>
    );
};

export default SuggestionRow;