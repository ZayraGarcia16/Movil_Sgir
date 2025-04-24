import React, { useState } from 'react';
import { 
  View, 
  FlatList, 
  StyleSheet, 
  TextInput, 
  ActivityIndicator,
  Text
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HotelCard from './HotelCard';
import { Hotel } from '../types/hotel';

interface HotelListProps {
  hotels: Hotel[];
  onSelectHotel: (hotel: Hotel) => void;
  loading?: boolean;
}

const HotelList: React.FC<HotelListProps> = ({ 
  hotels, 
  onSelectHotel,
  loading = false
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    region: '',
    minPrice: 0,
    maxPrice: Infinity,
    minRating: 0,
  });

  const filteredHotels = hotels.filter(hotel => {
    // Search filter
    const matchesSearch = hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          hotel.location.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          hotel.location.region.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Other filters
    const matchesRegion = !filters.region || hotel.location.region === filters.region;
    const matchesPrice = hotel.price.base >= filters.minPrice && 
                         hotel.price.base <= filters.maxPrice;
    const matchesRating = hotel.rating >= filters.minRating;
    
    return matchesSearch && matchesRegion && matchesPrice && matchesRating;
  });

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2E8B57" />
        <Text style={styles.loadingText}>Cargando hoteles...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar hoteles por nombre o ubicación"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery !== '' && (
          <Ionicons
            name="close-circle"
            size={20}
            color="#666"
            style={styles.clearIcon}
            onPress={() => setSearchQuery('')}
          />
        )}
      </View>

      {filteredHotels.length > 0 ? (
        <FlatList
          data={filteredHotels}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <HotelCard 
              hotel={item} 
              onPress={() => onSelectHotel(item)} 
            />
          )}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Ionicons name="search-outline" size={64} color="#ccc" />
          <Text style={styles.emptyText}>
            No se encontraron hoteles que coincidan con tu búsqueda
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  clearIcon: {
    marginLeft: 8,
  },
  listContainer: {
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#666',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  emptyText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default HotelList;