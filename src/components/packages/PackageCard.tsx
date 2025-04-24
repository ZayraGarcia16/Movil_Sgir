import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TravelPackage } from '../types/package';

interface PackageCardProps {
  travelPackage: TravelPackage;
  onPress: () => void;
}

const PackageCard: React.FC<PackageCardProps> = ({ travelPackage, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image 
        source={{ uri: travelPackage.images[0] }} 
        style={styles.image} 
        resizeMode="cover"
      />
      <View style={styles.durationBadge}>
        <Ionicons name="time-outline" size={14} color="#fff" />
        <Text style={styles.durationText}>{travelPackage.duration}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{travelPackage.name}</Text>
        <View style={styles.locationContainer}>
          <Ionicons name="location-outline" size={16} color="#666" />
          <Text style={styles.location}>{travelPackage.destinations.join(', ')}</Text>
        </View>
        <Text style={styles.description} numberOfLines={2}>
          {travelPackage.description}
        </Text>
        <View style={styles.detailsContainer}>
          <View style={styles.includes}>
            {travelPackage.includedServices.slice(0, 3).map((service, index) => (
              <View key={index} style={styles.includeItem}>
                <Ionicons name="checkmark-circle" size={14} color="#2E8B57" />
                <Text style={styles.includeText} numberOfLines={1}>
                  {service}
                </Text>
              </View>
            ))}
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>Desde</Text>
            <Text style={styles.price}>
              {travelPackage.price.basePrice.toLocaleString('es-CO')} {travelPackage.price.currency}
            </Text>
            <Text style={styles.priceNote}>por persona</Text>
          </View>
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
    height: 160,
  },
  durationBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  durationText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 4,
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
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  includes: {
    flex: 1,
    marginRight: 8,
  },
  includeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  includeText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
    flex: 1,
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  priceLabel: {
    fontSize: 12,
    color: '#666',
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2E8B57',
  },
  priceNote: {
    fontSize: 12,
    color: '#666',
  },
});

export default PackageCard;