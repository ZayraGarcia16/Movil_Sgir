import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { useTourStore } from '../store/useTourStore';
import TourCard from './TourCard';
import { Tour } from '../types/tour';

const TourList = () => {
  const { filteredTours } = useTourStore();
  const navigation = useNavigation();

  const handleCardPress = (tourId: string) => {
    navigation.navigate('TourDetails', { tourId });
  };

  return (
    <View style={styles.container}>
      {filteredTours().length === 0 ? (
        <Text style={styles.emptyText}>No se encontraron tours con estos filtros</Text>
      ) : (
        <FlatList
          data={filteredTours()}
          keyExtractor={(item: Tour) => item.id}
          renderItem={({ item }) => (
            <TourCard 
              tour={item} 
              onPress={() => handleCardPress(item.id)}
            />
          )}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12
  },
  listContent: {
    paddingBottom: 20
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#666'
  }
});

export default TourList;
