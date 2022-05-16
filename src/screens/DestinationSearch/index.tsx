import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/core';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../navigation/Router';

const DestinationSearch = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
    
  return (
    <View style={styles.container}>
       <GooglePlacesAutocomplete
      placeholder='Where are you going?'
      onPress={() => {
        navigation.navigate('Guests');
      }}
      query={{
        key: 'AIzaSyA4gue9FemumQ7eeQg36cEQAGMcdTE7XSQ',
        language: 'en',
        types:'(cities)'
      }}
      styles={{
        textInput: styles.searchText
      }}
      fetchDetails
      suppressDefaultStyles
      renderRow={(item: object) => <SuggestionRow item={item}/> }
    />
    </View>
  )
}

export default DestinationSearch;