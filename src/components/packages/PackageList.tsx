import React, { useState } from 'react';
import { 
  View, 
  FlatList, 
  StyleSheet, 
  TextInput,
  Text,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PackageCard from './PackageCard';
import { TravelPackage } from '../types/package';

interface PackageListProps {
  packages: TravelPackage[];
  onSelectPackage: (travelPackage: TravelPackage) => void;
  loading?: boolean;
}

const PackageList: React.FC<PackageListProps> = ({ 
  packages, 
  onSelectPackage,
  loading = false
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('');

  const regions = [...new Set(packages.map(pkg => 
    pkg.destinations.map(dest => {
      // Extracting region from destination if available
      if (dest.includes(',')) {
        return dest.split(',')[1].trim();
      }
      return dest;
    }).join(', ')
  ))];

  const filteredPackages = packages.filter(pkg => {
    // Search filter
    const matchesSearch = pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pkg.destinations.some(dest => 
                            dest.toLowerCase().includes(searchQuery.toLowerCase())
                          ) ||
                          pkg.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Region filter
    const matchesRegion = !activeFilter || 
                         pkg.destinations.some(dest => 
                           dest.toLowerCase().includes(activeFilter.toLowerCase())
                         );
    
    return matchesSearch && matchesRegion;
  });

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2E8B57" />
        <Text style={styles.loadingText}>Cargando paquetes...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar paquetes turísticos"
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

      <View style={styles.filtersContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={[
              styles.filterChip,
              activeFilter === '' && styles.activeFilterChip
            ]}
            onPress={() => setActiveFilter('')}
          >
            <Text 
              style={[
                styles.filterText,
                activeFilter === '' && styles.activeFilterText
              ]}
            >
              Todos
            </Text>
          </TouchableOpacity>
          
          {regions.map((region, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.filterChip,
                activeFilter === region && styles.activeFilterChip
              ]}
              onPress={() => setActiveFilter(region)}
            >
              <Text 
                style={[
                  styles.filterText,
                  activeFilter === region && styles.activeFilterText
                ]}
              >
                {region}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {filteredPackages.length > 0 ? (
        <FlatList
          data={filteredPackages}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <PackageCard 
              travelPackage={item} 
              onPress={() => onSelectPackage(item)} 
            />
          )}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Ionicons name="search-outline" size={64} color="#ccc" />
          <Text style={styles.emptyText}>
            No se encontraron paquetes que coincidan con tu búsqueda
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
    marginTop: 12,
    marginBottom: 8,
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
  filtersContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 8,
  },
  activeFilterChip: {
    backgroundColor: '#2E8B57',
  },
  filterText: {
    fontSize: 14,
    color: '#666',
  },
  activeFilterText: {
    color: '#fff',
    fontWeight: '600',
  },
  listContainer: {
    padding: 16,
    paddingTop: 8,
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

export default PackageList;