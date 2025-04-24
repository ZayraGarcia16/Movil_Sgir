import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';

import SearchBar from '../components/common/SearchBar';
import Button from '../components/common/Button';
import { POPULAR_DESTINATIONS } from '../constants/destinations';

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = () => {
    // Podríamos navegar a una pantalla de resultados de búsqueda
    // O filtrar en la categoría seleccionada
    if (searchQuery.trim()) {
      navigation.navigate('Hoteles', { searchQuery });
    }
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://via.placeholder.com/800x400' }}
        style={styles.headerImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.headerTitle}>Descubre Colombia</Text>
          <Text style={styles.headerSubtitle}>Vive experiencias inolvidables</Text>
        </View>
      </ImageBackground>

      <View style={styles.searchContainer}>
        <SearchBar
          placeholder="¿A dónde quieres ir?"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <MaterialIcons name="search" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.categoriesContainer}>
        <Text style={styles.sectionTitle}>Explora por categoría</Text>
        
        <View style={styles.categories}>
          <TouchableOpacity
            style={styles.categoryItem}
            onPress={() => navigation.navigate('Hoteles')}
          >
            <View style={styles.categoryIcon}>
              <MaterialIcons name="hotel" size={32} color="#FF6B6B" />
            </View>
            <Text style={styles.categoryLabel}>Hoteles</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.categoryItem}
            onPress={() => navigation.navigate('Paquetes')}
          >
            <View style={styles.categoryIcon}>
              <MaterialIcons name="card-travel" size={32} color="#FF6B6B" />
            </View>
            <Text style={styles.categoryLabel}>Paquetes</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.categoryItem}
            onPress={() => navigation.navigate('Excursiones')}
          >
            <View style={styles.categoryIcon}>
              <MaterialIcons name="hiking" size={32} color="#FF6B6B" />
            </View>
            <Text style={styles.categoryLabel}>Excursiones</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.destinationsContainer}>
        <Text style={styles.sectionTitle}>Destinos populares</Text>
        
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.destinationsScroll}
        >
          {POPULAR_DESTINATIONS.map((destination, index) => (
            <TouchableOpacity
              key={index}
              style={styles.destinationCard}
              onPress={() => {
                navigation.navigate('Hoteles', { 
                  searchQuery: destination.name 
                });
              }}
            >
              <Image
                source={{ uri: 'https://via.placeholder.com/200x200' }}
                style={styles.destinationImage}
              />
              <Text style={styles.destinationName}>{destination.name}</Text>
              <Text style={styles.destinationRegion}>{destination.region}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.promotionContainer}>
        <ImageBackground
          source={{ uri: 'https://via.placeholder.com/800x300' }}
          style={styles.promotionImage}
          imageStyle={styles.promotionImageStyle}
        >
          <View style={styles.promotionOverlay}>
            <Text style={styles.promotionTitle}>Ofertas especiales</Text>
            <Text style={styles.promotionSubtitle}>Hasta 30% de descuento</Text>
            <Button
              title="Ver ofertas"
              onPress={() => {
                navigation.navigate('Paquetes');
              }}
            />
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerImage: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerSubtitle: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -25,
    paddingHorizontal: 16,
  },
  searchButton: {
    backgroundColor: '#FF6B6B',
    borderRadius: 8,
    padding: 10,
    marginLeft: 8,
  },
  categoriesContainer: {
    padding: 16,
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryItem: {
    alignItems: 'center',
    width: '33%',
  },
  categoryIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryLabel: {
    fontWeight: 'bold',
  },
  destinationsContainer: {
    padding: 16,
  },
  destinationsScroll: {
    paddingBottom: 16,
  },
  destinationCard: {
    width: 160,
    marginRight: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#f8f8f8',
  },
  destinationImage: {
    width: 160,
    height: 100,
  },
  destinationName: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 8,
    paddingBottom: 2,
  },
  destinationRegion: {
    fontSize: 12,
    color: '#666',
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  promotionContainer: {
    padding: 16,
    marginBottom: 24,
  },
  promotionImage: {
    height: 150,
    borderRadius: 8,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  promotionImageStyle: {
    borderRadius: 8,
  },
  promotionOverlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 16,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  promotionTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  promotionSubtitle: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 16,
  },
});

export default HomeScreen;