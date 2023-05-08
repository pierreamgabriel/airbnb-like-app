import {View, FlatList, useWindowDimensions} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import MapView from 'react-native-maps';
import places from '../../../assets/data/feed';
import CustomMarker from '../../components/CustomMarker';
import PlaceToStayOnMap from '../../components/PlaceToStayOnMap';
import styles from './styles';

type ViewableItems = {
  viewableItems: {
    item: {
      id: string;
    };
  }[];
};

const SearchResultsMaps = () => {
  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);
  const width = useWindowDimensions().width;

  const flatlist = useRef<FlatList>(null);
  const viewConfig = {itemVisiblePercentThreshold: 70};
  const onViewChanged = useRef(({viewableItems}: ViewableItems): void => {
    if (viewableItems.length > 0) {
      const selectedItem = viewableItems[0].item;
      setSelectedPlace(selectedItem.id);
    }
  });
  const map = useRef<MapView>(null);
  useEffect(() => {
    if (!selectedPlace || !flatlist) {
      return;
    }

    const index = places.findIndex(place => place.id === selectedPlace);
    flatlist.current?.scrollToIndex({index});

    const place = places[index];
    const coordinates = {
      latitude: place.coordinate.latitude,
      longitude: place.coordinate.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };
    map.current?.animateToRegion(coordinates);
  }, [selectedPlace]);
  return (
    <View>
      <MapView
        style={styles.mapView}
        initialRegion={{
          latitude: 28.3915637,
          longitude: -16.6291304,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        ref={map}>
        {places.map(place => {
          return (
            <CustomMarker
              key={place.id}
              coordinate={place.coordinate}
              price={place.newPrice}
              isSelected={place.id === selectedPlace}
              onPress={() => setSelectedPlace(place.id)}
            />
          );
        })}
      </MapView>
      <View style={styles.listContainer}>
        <FlatList
          ref={flatlist}
          data={places}
          renderItem={({item}) => <PlaceToStayOnMap placeToStay={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          viewabilityConfig={viewConfig}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

export default SearchResultsMaps;
