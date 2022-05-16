import { View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigatorScreenParams } from '@react-navigation/core';
import { StackParams } from '../../navigation/Router';

type NavParams = {
    Home: NavigatorScreenParams<StackParams>;
    
}

const Guests = () => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const navigation = useNavigation<NativeStackNavigationProp<NavParams>>();
    return (
        <View style={styles.container}>
        <View>
            <View style={styles.row}>
                <View>
                    <Text style={styles.title}>Adults</Text>
                    <Text style={styles.description}>Ages 13 or above</Text>
                </View>
                <View style={styles.controlsRow}>
                    <Pressable style={styles.button}
                        onPress={() => setAdults(Math.max(0, adults - 1))}>
                        <Text style={styles.control} testID={'removeAdult'}>—</Text>
                    </Pressable>
                    <Text style={styles.quantity} testID={'adultQuantity'}>{adults}</Text>

                    <Pressable style={styles.button}
                        onPress={() => setAdults(adults + 1)}>
                        <Text style={styles.control} testID={'addAdult'}>+</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.row}>
                <View>
                    <Text style={styles.title}>Children</Text>
                    <Text style={styles.description}>Ages 2-12</Text>
                </View>
                <View style={styles.controlsRow}>
                    <Pressable style={styles.button}
                        onPress={() => setChildren(Math.max(0, children - 1))}>
                        <Text style={styles.control} testID={'removeChild'}>—</Text>
                    </Pressable>
                    <Text style={styles.quantity} testID={'childQuantity'}>{children}</Text>

                    <Pressable style={styles.button}
                        onPress={() => setChildren(children + 1)}>
                        <Text style={styles.control} testID={'addChild'}>+</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.row}>
                <View>
                    <Text style={styles.title}>Infants</Text>
                    <Text style={styles.description}>Under 2</Text>
                </View>
                <View style={styles.controlsRow}>
                    <Pressable style={styles.button}
                        onPress={() => setInfants(Math.max(0, infants - 1))}>
                        <Text style={styles.control} testID={'removeInfant'}>—</Text>
                    </Pressable>
                    <Text style={styles.quantity} testID={'infantQuantity'}>{infants}</Text>

                    <Pressable style={styles.button}
                        onPress={() => setInfants(infants + 1)}>
                        <Text style={styles.control} testID={'addInfant'}>+</Text>
                    </Pressable>
                </View>
            </View>
        </View>

        <Pressable style={styles.searchButton}
        onPress={() => navigation.navigate('Home', {
            screen: 'Explore',
            params: {
                screen: 'SearchResults'
            }
        })}>
                <Text style={styles.searchButtonText}>Search</Text>
            </Pressable>

        </View>
    )
}

export default Guests;