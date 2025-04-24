import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import SearchBar from '../components/common/SearchBar';
import FilterBar from '../components/common/FilterBar';
import Card from '../components/common/Card';
import { Tour } from '../models/Tour';
import { REGIONS } from '../constants/destinations';

// Datos de muestra para excursiones
const SAMPLE_TOURS: Tour[] = [
  {
    id: '1',
    name: 'Caminata Valle del Cocora',
    location: 'Salento, Quindío',
    duration: 6,
    price: 120000,
    rating: 4.9,
    image: 'https://via.placeholder.com/400',
    description: 'Recorre el majestuoso Valle del Cocora, hogar de la palma de cera, árbol nacional de Colombia. Esta caminata te llevará a través de senderos con vistas espectaculares, bosques de niebla y la oportunidad de avistar colibríes.',
    includes: [
      'Transporte desde Salento',
      'Guía especializado',
      'Almuerzo típico',
      'Seguro de aventura',
      'Entradas al parque natural'
    ],
    difficulty: 'Moderado',
    region: 'Andina'
  },
  {
    id: '2',
    name: 'City Tour Cartagena Histórica',
    location: 'Cartagena, Bolívar',
    duration: 4,
    price: 90000,
    rating: 4.7,
    image: 'https://via.placeholder.com/400',
    description: 'Descubre la magia de Cartagena de Indias recorriendo sus calles coloniales, plazas históricas y fortificaciones. Un guía experto te contará fascinantes historias sobre piratas, la Inquisición y la vida colonial.',
    includes: [
      'Guía turístico certificado',
      'Entrada a Castillo San Felipe',
      'Refrigerio típico',
      'Recorrido por barrios históricos',
      'Visita a la Catedral'
    ],
    difficulty: 'Fácil',
    region: 'Caribe'
  },
  {
    id: '3',
    name: 'Rafting Río Fonce',
    location: 'San Gil, Santander',
    duration: 3,
    price: 150000,
    rating: 4.8,
    image: 'https://via.placeholder.com/400',
    description: 'Vive la adrenalina del rafting en el río Fonce, uno de los mejores lugares para practicar este deporte en Colombia. Rápidos de clase II y III te esperan en esta aventura acuática rodeada de bellos paisajes.',
    includes: [
      'Equipo completo de seguridad',
      'Instructores certificados',
      'Transporte ida y vuelta',
      'Refrigerio energético',
      'Fotos de la experiencia'
    ],
    difficulty: 'Moderado',
    region: 'Andina'
  },
  {
    id: '4',
    name: 'Avistamiento de Ballenas',
    location: 'Bahía Solano, Chocó',
    duration: 5,
    price: 280000,
    rating: 4.9,
    image: 'https://via.placeholder.com/400',
    description: 'Entre julio y octubre, la costa pacífica colombiana se convierte en el escenario perfecto para observar ballenas jorobadas que vienen a dar a luz a sus crías. Una experiencia natural incomparable.',
    includes: [
      'Embarcación especializada',
      'Guía biólogo marino',
      'Almuerzo típico chocoano',
      'Hidratación',
      'Charla educativa sobre cetáceos'
    ],
    difficulty: 'Fácil',
    region: 'Pacífica'
  },
  {
    id: '5',
    name: 'Tour Minero en Zipaquirá',
    location: 'Zipaquirá, Cundinamarca',
    duration: 3,
    price: 85000,
    rating: 4.6,
    image: 'https://via.placeholder.com/400',
    description: 'Visita la impresionante Catedral de Sal de Zipaquirá, una maravilla arquitectónica construida en las antiguas minas de sal. Conoce la historia de la minería en Colombia y maravíllate con este templo subterráneo.',
    includes: [
      'Entrada a la Catedral de Sal',
      'Guía especializado',
      'Recorrido completo',
      'Video introductorio',
      'Tiempo libre para explorar'
    ],
    difficulty: 'Fácil',
    region: 'Andina'
  }
];

const ToursScreen = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState<Tour[]>(SAMPLE_TOURS);
  const [filteredTours, setFilteredTours] = useState<Tour[]>(SAMPLE_TOURS);

  useEffect(() => {
    filterTours();
  }, [searchQuery, selectedRegion]);

  const filterTours = () => {
    setLoading(true);
    setTimeout(() => {
      let filtered = [...tours];
      
      // Filtrar por región si hay alguna seleccionada
      if (selectedRegion) {
        filtered = filtered.filter(tour => tour.region === selectedRegion);
      }
      
      // Filtrar por búsqueda de texto
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(
          tour =>
            tour.name.toLowerCase().includes(query) ||
            tour.location.toLowerCase().includes(query)
        );
      }
      
      setFilteredTours(filtered);
      setLoading(false);
    }, 500); // Simular tiempo de carga
  };

  const handleTourPress = (tour: Tour) => {
    navigation.navigate('TourDetail', { tour });
  };

  const renderTourCard = ({ item }: { item: Tour }) => (
    <Card
      title={item.name}
      location={item.location}
      price={item.price}
      rating={item.rating}
      image={item.image}
      onPress={() => handleTourPress(item)}
    />
  );

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Buscar excursiones..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      
      <FilterBar
        filters={REGIONS}
        selectedFilter={selectedRegion}
        onSelectFilter={region => 
          setSelectedRegion(region === selectedRegion ? null : region)
        }
      />
      
      {loading ? (
        <ActivityIndicator size="large" color="#FF6B6B" style={styles.loader} />
      ) : filteredTours.length > 0 ? (
        <FlatList
          data={filteredTours}
          renderItem={renderTourCard}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            No se encontraron excursiones que coincidan con tu búsqueda.
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer: {
    padding: 16,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default ToursScreen;

// src/screens/TourDetailScreen.tsx
import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import Button from '../components/common/Button';
import { Tour } from '../models/Tour';

type TourDetailRouteProp = RouteProp<
  { TourDetail: { tour: Tour } },
  'TourDetail'
>;

interface TourDetailScreenProps {
  route: TourDetailRouteProp;
}

const TourDetailScreen: React.FC<TourDetailScreenProps> = ({ route }) => {
  const { tour } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: tour.image }} style={styles.image} />
      
      <View style={styles.header}>
        <Text style={styles.name}>{tour.name}</Text>
        <View style={styles.ratingContainer}>
          <MaterialIcons name="star" size={20} color="#FFD700" />
          <Text style={styles.rating}>{tour.rating.toFixed(1)}</Text>
        </View>
      </View>
      
      <View style={styles.locationContainer}>
        <MaterialIcons name="location-on" size={18} color="#666" />
        <Text style={styles.location}>{tour.location}</Text>
      </View>
      
      <View style={styles.infoRow}>
        <View style={styles.infoItem}>
          <MaterialIcons name="access-time" size={18} color="#666" />
          <Text style={styles.infoText}>{tour.duration} horas</Text>
        </View>
        
        <View style={styles.infoItem}>
          <MaterialIcons name="fitness-center" size={18} color="#666" />
          <Text style={styles.infoText}>Dificultad: {tour.difficulty}</Text>
        </View>
      </View>
      
      <View style={styles.priceContainer}>
        <Text style={styles.priceLabel}>Precio por persona</Text>
        <Text style={styles.price}>COP {tour.price.toLocaleString()}</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Descripción</Text>
        <Text style={styles.description}>{tour.description}</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>La excursión incluye</Text>
        <View style={styles.includesContainer}>
          {tour.includes.map((item, index) => (
            <View key={index} style={styles.includeItem}>
              <MaterialIcons name="check-circle" size={16} color="#4ECDC4" />
              <Text style={styles.includeText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
      
      <View style={styles.bookingContainer}>
        <Button
          title="Reservar ahora"
          onPress={() => {
            onPress={() => {
                // Lógica para realizar la reserva
                alert('¡Reserva iniciada!');
              }}
            />
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recomendaciones</Text>
            <View style={styles.recommendationsContainer}>
              <View style={styles.recommendationItem}>
                <MaterialIcons name="wb-sunny" size={16} color="#FF6B6B" />
                <Text style={styles.recommendationText}>Llevar protección solar</Text>
              </View>
              <View style={styles.recommendationItem}>
                <MaterialIcons name="local-drink" size={16} color="#FF6B6B" />
                <Text style={styles.recommendationText}>Hidratación constante</Text>
              </View>
              <View style={styles.recommendationItem}>
                <MaterialIcons name="directions-walk" size={16} color="#FF6B6B" />
                <Text style={styles.recommendationText}>Zapatos cómodos</Text>
              </View>
              <View style={styles.recommendationItem}>
                <MaterialIcons name="camera-alt" size={16} color="#FF6B6B" />
                <Text style={styles.recommendationText}>¡No olvides tu cámara!</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      image: {
        width: '100%',
        height: 250,
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 16,
      },
      name: {
        fontSize: 22,
        fontWeight: 'bold',
        flex: 1,
      },
      ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 16,
      },
      rating: {
        marginLeft: 4,
        fontWeight: 'bold',
      },
      locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 4,
      },
      location: {
        fontSize: 16,
        color: '#666',
        marginLeft: 4,
      },
      infoRow: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 4,
        marginBottom: 8,
      },
      infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16,
      },
      infoText: {
        fontSize: 14,
        color: '#666',
        marginLeft: 4,
      },
      priceContainer: {
        margin: 16,
        padding: 16,
        backgroundColor: '#f8f8f8',
        borderRadius: 8,
      },
      priceLabel: {
        fontSize: 14,
        color: '#666',
      },
      price: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FF6B6B',
      },
      section: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginBottom: 8,
      },
      sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#333',
      },
      includesContainer: {
        marginTop: 8,
      },
      includeItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
      },
      includeText: {
        marginLeft: 8,
        fontSize: 14,
      },
      bookingContainer: {
        padding: 16,
        marginTop: 8,
      },
      recommendationsContainer: {
        marginTop: 8,
      },
      recommendationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
      },
      recommendationText: {
        marginLeft: 8,
        fontSize: 14,
      }
    });
    
    export default TourDetailScreen;