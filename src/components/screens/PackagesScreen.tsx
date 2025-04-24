import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import SearchBar from '../components/common/SearchBar';
import FilterBar from '../components/common/FilterBar';
import Card from '../components/common/Card';
import { Package } from '../models/Package';
import { REGIONS } from '../constants/destinations';

// Datos de muestra para paquetes
const SAMPLE_PACKAGES: Package[] = [
  {
    id: '1',
    name: 'Cartagena Cultural',
    locations: ['Cartagena', 'Islas del Rosario'],
    duration: 5,
    price: 1200000,
    rating: 4.7,
    image: 'https://via.placeholder.com/400',
    description: 'Disfruta de lo mejor de Cartagena y sus alrededores con este paquete completo que incluye visitas a la ciudad amurallada, tour por las Islas del Rosario y experiencias culturales únicas.',
    includes: [
      'Alojamiento 4 noches en hotel 4 estrellas',
      'Desayunos diarios',
      'Tour por la ciudad amurallada',
      'Excursión a Islas del Rosario',
      'Traslados aeropuerto-hotel-aeropuerto',
      'Seguro de viaje'
    ],
    itinerary: [
      {
        day: 1,
        activities: ['Llegada a Cartagena', 'Traslado al hotel', 'Cena de bienvenida']
      },
      {
        day: 2,
        activities: ['Tour por la ciudad amurallada', 'Almuerzo en restaurante local', 'Tarde libre']
      },
      {
        day: 3,
        activities: ['Excursión a Islas del Rosario', 'Snorkel en arrecifes de coral', 'Almuerzo típico']
      },
      {
        day: 4,
        activities: ['Tour por Getsemaní', 'Clase de cocina colombiana', 'Show de salsa']
      },
      {
        day: 5,
        activities: ['Tiempo libre para compras', 'Traslado al aeropuerto', 'Salida de Cartagena']
      }
    ],
    region: 'Caribe'
  },
  {
    id: '2',
    name: 'Eje Cafetero Completo',
    locations: ['Armenia', 'Salento', 'Valle del Cocora', 'Filandia'],
    duration: 4,
    price: 950000,
    rating: 4.8,
    image: 'https://via.placeholder.com/400',
    description: 'Recorre el corazón del Eje Cafetero colombiano, conociendo haciendas cafeteras, el majestuoso Valle del Cocora con sus palmas de cera y los coloridos pueblos de la región.',
    includes: [
      'Alojamiento 3 noches en finca cafetera',
      'Desayunos y cenas',
      'Tour del café en hacienda tradicional',
      'Visita al Valle del Cocora',
      'Recorrido por Salento y Filandia',
      'Transporte terrestre durante todo el recorrido',
      'Guía especializado'
    ],
    itinerary: [
      {
        day: 1,
        activities: ['Llegada a Armenia', 'Traslado a la finca cafetera', 'Tour de introducción al café']
      },
      {
        day: 2,
        activities: ['Visita al Valle del Cocora', 'Caminata entre palmas de cera', 'Visita a Salento']
      },
      {
        day: 3,
        activities: ['Tour completo en hacienda cafetera', 'Visita a Filandia', 'Cena de despedida']
      },
      {
        day: 4,
        activities: ['Tiempo libre', 'Traslado a Armenia', 'Salida']
      }
    ],
    region: 'Andina'
  },
  {
    id: '3',
    name: 'Aventura en la Amazonía',
    locations: ['Leticia', 'Puerto Nariño', 'Isla de los Micos'],
    duration: 6,
    price: 1800000,
    rating: 4.9,
    image: 'https://via.placeholder.com/400',
    description: 'Adéntrate en la selva amazónica colombiana en esta aventura única que te llevará a conocer comunidades indígenas, la exuberante fauna y flora, y la magia del río Amazonas.',
    includes: [
      'Vuelos internos Bogotá-Leticia-Bogotá',
      'Alojamiento 5 noches en lodge amazónico',
      'Pensión completa',
      'Excursiones diarias con guías locales',
      'Visita a comunidades indígenas',
      'Safari nocturno',
      'Pesca de pirañas',
      'Avistamiento de delfines rosados'
    ],
    itinerary: [
      {
        day: 1,
        activities: ['Vuelo a Leticia', 'Traslado al lodge', 'Caminata introductoria']
      },
      {
        day: 2,
        activities: ['Visita a comunidad indígena Ticuna', 'Almuerzo tradicional', 'Fabricación de artesanías']
      },
      {
        day: 3, 
        activities: ['Navegación por el río Amazonas', 'Visita a Puerto Nariño', 'Avistamiento de delfines']
      },
      {
        day: 4,
        activities: ['Isla de los Micos', 'Pesca de pirañas', 'Safari nocturno']
      },
      {
        day: 5,
        activities: ['Caminata en selva profunda', 'Identificación de plantas medicinales', 'Ritual chamánico']
      },
      {
        day: 6,
        activities: ['Regreso a Leticia', 'Compra de souvenirs', 'Vuelo a Bogotá']
      }
    ],
    region: 'Amazonía'
  },
  {
    id: '4',
    name: 'San Andrés Todo Incluido',
    locations: ['San Andrés', 'Johnny Cay', 'Haynes Cay'],
    duration: 5,
    price: 1500000,
    rating: 4.5,
    image: 'https://via.placeholder.com/400',
    description: 'Disfruta del paraíso caribeño colombiano con este paquete todo incluido a San Andrés, con sus playas de arena blanca, mar de siete colores y toda la diversión que ofrece la isla.',
    includes: [
      'Vuelos ida y vuelta desde Bogotá',
      'Alojamiento 4 noches en hotel todo incluido',
      'Alimentación completa y bebidas',
      'Tour a Johnny Cay y Haynes Cay',
      'Vuelta a la isla',
      'Fiesta en barco',
      'Traslados aeropuerto-hotel-aeropuerto'
    ],
    itinerary: [
      {
        day: 1,
        activities: ['Vuelo a San Andrés', 'Check-in en hotel', 'Tarde libre en la playa']
      },
      {
        day: 2,
        activities: ['Tour vuelta a la isla', 'Visita al Hoyo Soplador', 'Noche de fiesta caribeña']
      },
      {
        day: 3,
        activities: ['Tour a Johnny Cay', 'Snorkel en arrecifes', 'Almuerzo típico isleño']
      },
      {
        day: 4,
        activities: ['Visita a Haynes Cay', 'Acuario natural', 'Fiesta en barco al atardecer']
      },
      {
        day: 5,
        activities: ['Tiempo libre para compras', 'Traslado al aeropuerto', 'Regreso a Bogotá']
      }
    ],
    region: 'Insular'
  }
];

const PackagesScreen = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [packages, setPackages] = useState<Package[]>(SAMPLE_PACKAGES);
  const [filteredPackages, setFilteredPackages] = useState<Package[]>(SAMPLE_PACKAGES);

  useEffect(() => {
    filterPackages();
  }, [searchQuery, selectedRegion]);

  const filterPackages = () => {
    setLoading(true);
    setTimeout(() => {
      let filtered = [...packages];
      
      // Filtrar por región si hay alguna seleccionada
      if (selectedRegion) {
        filtered = filtered.filter(pkg => pkg.region === selectedRegion);
      }
      
      // Filtrar por búsqueda de texto
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(
          pkg =>
            pkg.name.toLowerCase().includes(query) ||
            pkg.locations.some(location => location.toLowerCase().includes(query))
        );
      }
      
      setFilteredPackages(filtered);
      setLoading(false);
    }, 500); // Simular tiempo de carga
  };

  const handlePackagePress = (pkg: Package) => {
    navigation.navigate('PackageDetail', { package: pkg });
  };

  const renderPackageCard = ({ item }: { item: Package }) => (
    <Card
      title={item.name}
      location={item.locations.join(', ')}
      price={item.price}
      rating={item.rating}
      image={item.image}
      onPress={() => handlePackagePress(item)}
    />
  );

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Buscar paquetes..."
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
      ) : filteredPackages.length > 0 ? (
        <FlatList
          data={filteredPackages}
          renderItem={renderPackageCard}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            No se encontraron paquetes que coincidan con tu búsqueda.
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

export default PackagesScreen;

// src/screens/PackageDetailScreen.tsx
import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import Button from '../components/common/Button';
import { Package } from '../models/Package';

type PackageDetailRouteProp = RouteProp<
  { PackageDetail: { package: Package } },
  'PackageDetail'
>;

interface PackageDetailScreenProps {
  route: PackageDetailRouteProp;
}

const PackageDetailScreen: React.FC<PackageDetailScreenProps> = ({ route }) => {
  const { package: pkg } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: pkg.image }} style={styles.image} />
      
      <View style={styles.header}>
        <Text style={styles.name}>{pkg.name}</Text>
        <View style={styles.ratingContainer}>
          <MaterialIcons name="star" size={20} color="#FFD700" />
          <Text style={styles.rating}>{pkg.rating.toFixed(1)}</Text>
        </View>
      </View>
      
      <View style={styles.locationContainer}>
        <MaterialIcons name="location-on" size={18} color="#666" />
        <Text style={styles.location}>{pkg.locations.join(', ')}</Text>
      </View>
      
      <View style={styles.durationContainer}>
        <MaterialIcons name="calendar-today" size={18} color="#666" />
        <Text style={styles.duration}>{pkg.duration} días</Text>
      </View>
      
      <View style={styles.priceContainer}>
        <Text style={styles.priceLabel}>Precio por persona</Text>
        <Text style={styles.price}>COP {pkg.price.toLocaleString()}</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Descripción</Text>
        <Text style={styles.description}>{pkg.description}</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>El paquete incluye</Text>
        <View style={styles.includesContainer}>
          {pkg.includes.map((item, index) => (
            <View key={index} style={styles.includeItem}>
              <MaterialIcons name="check-circle" size={16} color="#4ECDC4" />
              <Text style={styles.includeText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Itinerario</Text>
        {pkg.itinerary.map((day) => (
          <View key={day.day} style={styles.dayContainer}>
            <Text style={styles.dayTitle}>Día {day.day}</Text>
            <View style={styles.activitiesContainer}>
              {day.activities.map((activity, index) => (
                <View key={index} style={styles.activityItem}>
                  <MaterialIcons name="arrow-right" size={16} color="#FF6B6B" />
                  <Text style={styles.activityText}>{activity}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
      
      <View style={styles.bookingContainer}>
        <Button
          title="Reservar ahora"
          onPress={() => {
            // Lógica para realizar la reserva
            alert('¡Reserva iniciada!');
          }}
        />
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
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 4,
    marginBottom: 8,
  },
  duration: {
    fontSize: 16,
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
  dayContainer: {
    marginBottom: 16,
  },
  dayTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#4ECDC4',
  },
  activitiesContainer: {
    paddingLeft: 8,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  activityText: {
    marginLeft: 8,
    fontSize: 14,
  },
  bookingContainer: {
    padding: 16,
    marginTop: 8,
    marginBottom: 24,
  },
});

export default PackageDetailScreen;