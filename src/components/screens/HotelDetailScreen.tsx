import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image, 
  TouchableOpacity,
  Dimensions,
  Share,
  Platform
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { Hotel } from '../types/hotel';

const { width } = Dimensions.get('window');

type RootStackParamList = {
  HotelDetail: { hotel: Hotel };
};

type HotelDetailScreenRouteProp = RouteProp<RootStackParamList, 'HotelDetail'>;
type HotelDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HotelDetail'>;

interface HotelDetailScreenProps {
  route: HotelDetailScreenRouteProp;
  navigation: HotelDetailScreenNavigationProp;
}

const HotelDetailScreen: React.FC<HotelDetailScreenProps> = ({ route, navigation }) => {
  const { hotel } = route.params;
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showRoomDetails, setShowRoomDetails] = useState(false);

  const handleShare = async () => {
    try {
      await Share.share({
        message: `¡Mira este increíble hotel en ${hotel.location.city}! ${hotel.name} - Disponible en nuestra app de Turismo Colombia.`,
        title: hotel.name,
      });
    } catch (error) {
      console.error('Error al compartir:', error);
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Image Gallery */}
      <View style={styles.imageGalleryContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(event) => {
            const newIndex = Math.floor(
              event.nativeEvent.contentOffset.x / width
            );
            setActiveImageIndex(newIndex);
          }}
        >
          {hotel.images.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image }}
              style={styles.galleryImage}
              resizeMode="cover"
            />
          ))}
        </ScrollView>
        
        {/* Image Indicators */}
        <View style={styles.indicatorsContainer}>
          {hotel.images.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                index === activeImageIndex && styles.activeIndicator,
              ]}
            />
          ))}
        </View>
        
        {/* Back Button */}
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        
        {/* Share Button */}
        <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
          <Ionicons name="share-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Hotel Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.hotelName}>{hotel.name}</Text>
        
        <View style={styles.locationContainer}>
          <Ionicons name="location-outline" size={18} color="#666" />
          <Text style={styles.locationText}>
            {hotel.location.address}, {hotel.location.city}, {hotel.location.region}
          </Text>
        </View>
        
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={18} color="#FFD700" />
          <Text style={styles.ratingText}>{hotel.rating.toFixed(1)}</Text>
          <Text style={styles.reviewCount}>
            ({hotel.reviewCount} reseñas)
          </Text>
        </View>
        
        <View style={styles.separator} />
        
        <Text style={styles.descriptionTitle}>Acerca del Hotel</Text>
        <Text style={styles.description}>{hotel.description}</Text>
        
        <View style={styles.separator} />
        
        <Text style={styles.sectionTitle}>Comodidades</Text>
        <View style={styles.amenitiesContainer}>
          {hotel.amenities.map((amenity, index) => (
            <View key={index} style={styles.amenityItem}>
              <Ionicons name="checkmark-circle" size={16} color="#2E8B57" />
              <Text style={styles.amenityText}>{amenity}</Text>
            </View>
          ))}
        </View>
        
        <View style={styles.separator} />
        
        <TouchableOpacity 
          style={styles.roomsToggle}
          onPress={() => setShowRoomDetails(!showRoomDetails)}
        >
          <Text style={styles.sectionTitle}>Habitaciones Disponibles</Text>
          <Ionicons 
            name={showRoomDetails ? "chevron-up" : "chevron-down"} 
            size={24} 
            color="#333" 
          />
        </TouchableOpacity>
        
        {showRoomDetails && (
          <View style={styles.roomsContainer}>
            {hotel.roomTypes.map((room, index) => (
              <View key={index} style={styles.roomCard}>
                <Text style={styles.roomName}>{room.name}</Text>
                <Text style={styles.roomDescription}>{room.description}</Text>
                <View style={styles.roomDetails}>
                  <View style={styles.roomDetailItem}>
                    <Ionicons name="people-outline" size={16} color="#666" />
                    <Text style={styles.roomDetailText}>
                      {room.capacity} personas
                    </Text>
                  </View>
                  <View style={styles.roomDetailItem}>
                    <Ionicons name="bed-outline" size={16} color="#666" />
                    <Text style={styles.roomDetailText}>
                      {room.beds}
                    </Text>
                  </View>
                </View>
                <View style={styles.roomPriceContainer}>
                  <Text style={styles.roomPrice}>
                    {room.price.toLocaleString('es-CO')} {hotel.price.currency}
                  </Text>
                  <Text style={styles.roomPriceNote}>por noche</Text>
                </View>
                <TouchableOpacity style={styles.bookButton}>
                  <Text style={styles.bookButtonText}>Reservar Ahora</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
        
        <View style={styles.separator} />
        
        <Text style={styles.sectionTitle}>Ubicación</Text>
        <View style={styles.mapPlaceholder}>
          <Text style={styles.mapText}>Mapa Interactivo</Text>
          <Text style={styles.mapSubtext}>
            {hotel.location.address}, {hotel.location.city}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  imageGalleryContainer: {
    position: 'relative',
    height: 250,
  },
  galleryImage: {
    width,
    height: 250,
  },
  indicatorsContainer: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: '#fff',
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 40 : 16,
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 40 : 16,
    right: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    padding: 16,
  },
  hotelName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  locationText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
    flex: 1,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginLeft: 4,
  },
  reviewCount: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
 