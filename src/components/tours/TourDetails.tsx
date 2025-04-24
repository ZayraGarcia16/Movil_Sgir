import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Tour } from '../types/tour';
import Icon from 'react-native-vector-icons/MaterialIcons';

type TourDetailsProps = {
  route: {
    params: {
      tourId: string;
    };
  };
};

const TourDetails = ({ route }: TourDetailsProps) => {
  const { tours } = useTourStore();
  const tour = tours.find(t => t.id === route.params.tourId);

  if (!tour) {
    return (
      <View style={styles.notFoundContainer}>
        <Text>Tour no encontrado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image 
          source={{ uri: tour.image }} 
          style={styles.mainImage}
        />
        
        <View style={styles.content}>
          <Text style={styles.title}>{tour.name}</Text>
          
          <View style={styles.metaContainer}>
            <View style={styles.metaItem}>
              <Icon name="star" size={20} color="#FFD700" />
              <Text style={styles.metaText}>{tour.rating}/5</Text>
            </View>
            
            <View style={styles.metaItem}>
              <Icon name="attach-money" size={20} color="#4CAF50" />
              <Text style={styles.metaText}>{formatPrice(tour.price)}</Text>
            </View>
            
            <View style={styles.metaItem}>
              <Icon name="schedule" size={20} color="#3F51B5" />
              <Text style={styles.metaText}>{tour.duration} días</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Descripción</Text>
          <Text style={styles.description}>{tour.description}</Text>

          <Text style={styles.sectionTitle}>Incluye</Text>
          {tour.includes.map((item, index) => (
            <View key={index} style={styles.includeItem}>
              <Icon name="check-circle" size={18} color="#4CAF50" />
              <Text style={styles.includeText}>{item}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity 
        style={styles.bookButton}
        onPress={() => {/* Lógica de reserva */}}
      >
        <Text style={styles.bookButtonText}>Reservar Ahora</Text>
      </TouchableOpacity>
    </View>
  );
};

// Estilos y formatPrice en utils
