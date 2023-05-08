import {View, FlatList} from 'react-native';
import React from 'react';
import feed from '../../../assets/data/feed';
import PlaceToStay from '../../components/PlaceToStay';

const SearchResults = () => {
  return (
    <View>
      <FlatList
        data={feed}
        renderItem={({item}) => <PlaceToStay placeToStay={item} />}
      />
    </View>
  );
};

export default SearchResults;
