import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Hotel } from '../types/hotel';

interface HotelCardProps {
  hotel: Hotel;
  onPress: () => void;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel, onPress }) => {
  // Validar que existan imágenes y amenities para evitar errores
  const firstImage = hotel.images && hotel.images.length > 0 ? hotel.images[0] : undefined;
  const amenities = hotel.amenities || [];

  return (
    <TouchableOpacity onPress={onPress} style={styles.card} activeOpacity={0.8}>
      {firstImage ? (
        <Image 
          source={{ uri: firstImage }} 
          style={styles.image} 
          resizeMode="cover"
        />
      ) : (
        <View style={[styles.image, styles.imagePlaceholder]}>
          <Ionicons name="image-outline" size={40} color="#ccc" />
        </View>
      )}
      <View style={styles.contentContainer}>
        <Text style={styles.name} numberOfLines={1}>{hotel.name}</Text>
        <View style={styles.locationContainer}>
          <Ionicons name="location-outline" size={16} color="#666" />
          <Text style={styles.location} numberOfLines={1}>
            {hotel.location.city}, {hotel.location.region}
          </Text>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text style={styles.rating}>{hotel.rating.toFixed(1)}</Text>
          </View>
          <Text style={styles.price}>
            Desde {hotel.price.base.toLocaleString('es-CO')} {hotel.price.currency}
          </Text>
        </View>
        <View style={styles.tagsContainer}>
          {amenities.slice(0, 3).map((amenity, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{amenity}</Text>
            </View>
          ))}
          {amenities.length > 3 && (
            <Text style={styles.moreTag}>+{amenities.length - 3}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
  },
  imagePlaceholder: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  contentContainer: {
    padding: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
    color: '#333',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2E8B57',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
    marginRight: 6,
    marginBottom: 4,
  },
  tagText: {
    fontSize: 12,
    color: '#666',
  },
  moreTag: {
    fontSize: 12,
    color: '#666',
    alignSelf: 'center',
  },
});

export default HotelCard;
