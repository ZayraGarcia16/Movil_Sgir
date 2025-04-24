// hotels/hotels.data.ts - Datos de muestra para hoteles

import { Hotel } from './hotel.model';

export const HOTELS: Hotel[] = [
  {
    id: 'hotel-1',
    name: 'Hotel Boutique Casa del Coliseo',
    description: 'Hotel boutique de lujo ubicado en una casa colonial restaurada en el corazón de la Ciudad Amurallada de Cartagena. Combina la arquitectura histórica con comodidades modernas.',
    location: {
      city: 'Cartagena',
      region: 'Caribe',
      address: 'Calle del Coliseo No. 35-23, Centro Histórico',
      coordinates: {
        latitude: 10.4254,
        longitude: -75.5508
      }
    },
    stars: 4.5,
    priceRange: "$$$",
    images: [
      'https://via.placeholder.com/400x300?text=Casa+del+Coliseo+1',
      'https://via.placeholder.com/400x300?text=Casa+del+Coliseo+2',
      'https://via.placeholder.com/400x300?text=Casa+del+Coliseo+3'
    ],
    amenities: [
      'Piscina', 'WiFi gratis', 'Desayuno incluido', 'Aire acondicionado',
      'Terraza en la azotea', 'Bar', 'Servicio de habitaciones'
    ],
    rooms: [
      {
        id: 'room-1-1',
        name: 'Habitación Estándar',
        description: 'Cómoda habitación con una cama queen y baño privado.',
        capacity: 2,
        pricePerNight: 250000,
        amenities: ['TV por cable', 'Aire acondicionado', 'Minibar'],
        images: ['https://via.placeholder.com/400x300?text=Standard+Room'],
        available: true
      },
      {
        id: 'room-1-2',
        name: 'Suite Colonial',
        description: 'Elegante suite con balcón y vista a la ciudad amurallada.',
        capacity: 3,
        pricePerNight: 450000,
        amenities: ['TV por cable', 'Aire acondicionado', 'Minibar', 'Balcón privado', 'Sala de estar'],
        images: ['https://via.placeholder.com/400x300?text=Colonial+Suite'],
        available: true
      }
    ],
    reviews: [
      {
        id: 'review-1-1',
        userName: 'Carlos Martínez',
        rating: 5,
        comment: 'Excelente ubicación y servicio. Las habitaciones son hermosas y el personal muy atento.',
        date: '2025-01-15'
      },
      {
        id: 'review-1-2',
        userName: 'Laura González',
        rating: 4,
        comment: 'Hermoso hotel con mucho encanto. El desayuno es delicioso.',
        date: '2025-02-03'
      }
    ],
    rating: 4.8,
    contactInfo: {
      phone: '+57 5 664 3357',
      email: 'reservas@casadelcoliseo.com',
      website: 'www.casadelcoliseo.com'
    },
    checkInTime: '15:00',
    checkOutTime: '12:00',
    policies: [
      'No se permiten mascotas',
      'No se permite fumar en las habitaciones',
      'Se requiere tarjeta de crédito para garantizar la reserva'
    ],
    featured: true
  },
  {
    id: 'hotel-2',
    name: 'Hotel Estelar Milla de Oro',
    description: 'Hotel de lujo ubicado en la zona financiera y de entretenimiento de Medellín. Ofrece habitaciones espaciosas, centro de negocios y excelentes instalaciones para reuniones.',
    location: {
      city: 'Medellín',
      region: 'Andina',
      address: 'Carrera 43A No. 1-50, El Poblado',
      coordinates: {
        latitude: 6.2087,
        longitude: -75.5698
      }
    },
    stars: 5,
    priceRange: "$$$$",
    images: [
      'https://via.placeholder.com/400x300?text=Estelar+Milla+de+Oro+1',
      'https://via.placeholder.com/400x300?text=Estelar+Milla+de+Oro+2',
      'https://via.placeholder.com/400x300?text=Estelar+Milla+de+Oro+3'
    ],
    amenities: [
      'Gimnasio', 'Piscina', 'WiFi gratis', 'Restaurante', 'Bar',
      'Centro de negocios', 'Servicio de habitaciones 24h', 'Estacionamiento'
    ],
    rooms: [
      {
        id: 'room-2-1',
        name: 'Habitación Deluxe',
        description: 'Amplia habitación con vistas a la ciudad y todas las comodidades modernas.',
        capacity: 2,
        pricePerNight: 380000,
        amenities: ['TV LCD', 'Aire acondicionado', 'Minibar', 'Caja fuerte'],
        images: ['https://via.placeholder.com/400x300?text=Deluxe+Room'],
        available: true
      },
      {
        id: 'room-2-2',
        name: 'Suite Ejecutiva',
        description: 'Lujosa suite con sala de estar separada y vistas panorámicas.',
        capacity: 4,
        pricePerNight: 650000,
        amenities: ['TV LCD', 'Aire acondicionado', 'Minibar', 'Cafetera', 'Área de trabajo', 'Batas de baño'],
        images: ['https://via.placeholder.com/400x300?text=Executive+Suite'],
        available: true
      }
    ],
    reviews: [
      {
        id: 'review-2-1',
        userName: 'Pedro Ramírez',
        rating: 5,
        comment: 'Hotel de primer nivel. Las instalaciones son impecables y la ubicación es perfecta.',
        date: '2025-03-10'
      },
      {
        id: 'review-2-2',
        userName: 'María Fernández',
        rating: 4.5,
        comment: 'Excelente atención y las habitaciones son muy cómodas. El desayuno tipo buffet es variado y delicioso.',
        date: '2025-02-22'
      }
    ],
    rating: 4.7,
    contactInfo: {
      phone: '+57 4 444 5151',
      email: 'reservas.medellin@hotelesestelar.com',
      website: 'www.hotelesestelar.com'
    },
    checkInTime: '15:00',
    checkOutTime: '13:00',
    policies: [
      'Se aceptan mascotas pequeñas con costo adicional',
      'No se permite fumar en las habitaciones',
      'Cancelación gratuita hasta 24 horas antes'
    ],
    featured: true
  },
  {
    id: 'hotel-3',
    name: 'Decameron Isleño',
    description: 'Resort todo incluido frente al mar en la hermosa isla de San Andrés. Disfrute de playas de arena blanca, piscinas y una amplia variedad de actividades recreativas.',
    location: {
      city: 'San Andrés',
      region: 'Insular',
      address: 'Av. Colombia No. 1-19, San Andrés Isla',
      coordinates: {
        latitude: 12.5841,
        longitude: -81.7000
      }
    },
    stars: 4,
    priceRange: "$$$",
    images: [
      'https://via.placeholder.com/400x300?text=Decameron+Isleño+1',
      'https://via.placeholder.com/400x300?text=Decameron+Isleño+2',
      'https://via.placeholder.com/400x300?text=Decameron+Isleño+3'
    ],
    amenities: [
      'Todo incluido', 'Playa privada', 'Piscinas', 'Restaurantes temáticos',
      'Deportes acuáticos', 'Entretenimiento nocturno', 'WiFi en áreas comunes'
    ],
    rooms: [
      {
        id: 'room-3-1',
        name: 'Habitación Estándar Vista al Jardín',
        description: 'Cómoda habitación con vista a los jardines tropicales del hotel.',
        capacity: 3,
        pricePerNight: 420000,
        amenities: ['TV', 'Aire acondicionado', 'Baño privado', 'Todo incluido'],
        images: ['https://via.placeholder.com/400x300?text=Garden+View+Room'],
        available: true
      },
      {
        id: 'room-3-2',
        name: 'Habitación Superior Vista al Mar',
        description: 'Hermosa habitación con impresionantes vistas al Mar Caribe.',
        capacity: 3,
        pricePerNight: 580000,
        amenities: ['TV', 'Aire acondicionado', 'Minibar', 'Balcón privado', 'Todo incluido'],
        images: ['https://via.placeholder.com/400x300?text=Sea+View+Room'],
        available: true
      }
    ],
    reviews: [
      {
        id: 'review-3-1',
        userName: 'Javier López',
        rating: 4,
        comment: 'Gran experiencia todo incluido. La comida es buena y hay muchas actividades disponibles.',
        date: '2025-01-30'
      },
      {
        id: 'review-3-2',
        userName: 'Ana Morales',
        rating: 4.5,
        comment: 'Excelente ubicación frente a la playa. El personal es muy amable y las habitaciones son cómodas.',
        date: '2025-03-05'
      }
    ],
    rating: 4.2,
    contactInfo: {
      phone: '+57 1 742 9999',
      email: 'reservas@decameron.com',
      website: 'www.decameron.com'
    },
    checkInTime: '15:00',
    checkOutTime: '12:00',
    policies: [
      'Todo incluido: alimentos, bebidas y actividades',
      'No se permiten mascotas',
      'Cancelación con penalidad después de 48 horas antes del check-in'
    ],
    featured: false
  },
  {
    id: 'hotel-4',
    name: 'Hotel Sofitel Santa Clara',
    description: 'Lujoso hotel ubicado en un antiguo convento del siglo XVII en el corazón de Cartagena. Combina a la perfección el encanto colonial con el lujo contemporáneo.',
    location: {
      city: 'Cartagena',
      region: 'Caribe',
      address: 'Calle del Torno No. 39-29, Centro Histórico',
      coordinates: {
        latitude: 10.4251,
        longitude: -75.5525
      }
    },
    stars: 5,
    priceRange: "$$$$",
    images: [
      'https://via.placeholder.com/400x300?text=Sofitel+Santa+Clara+1',
      'https://via.placeholder.com/400x300?text=Sofitel+Santa+Clara+2',
      'https://via.placeholder.com/400x300?text=Sofitel+Santa+Clara+3'
    ],
    amenities: [
      'Spa de lujo', 'Piscina', 'Restaurantes gourmet', 'Bar',
      'Jardines coloniales', 'WiFi gratis', 'Gimnasio', 'Servicio de concierge'
    ],
    rooms: [
      {
        id: 'room-4-1',
        name: 'Habitación Superior',
        description: 'Elegante habitación que combina elementos coloniales con comodidades modernas.',
        capacity: 2,
        pricePerNight: 750000,
        amenities: ['TV LCD', 'Aire acondicionado', 'Minibar', 'Productos de baño Hermès', 'Caja fuerte'],
        images: ['https://via.placeholder.com/400x300?text=Superior+Room'],
        available: true
      },
      {
        id: 'room-4-2',
        name: 'Suite Opera',
        description: 'Lujosa suite con sala de estar separada y vistas al convento histórico.',
        capacity: 3,
        pricePerNight: 1250000,
        amenities: ['TV LCD', 'Aire acondicionado', 'Minibar', 'Sala de estar', 'Baño de mármol', 'Balcón'],
        images: ['https://via.placeholder.com/400x300?text=Opera+Suite'],
        available: true
      }
    ],
    reviews: [
      {
        id: 'review-4-1',
        userName: 'Roberto García',
        rating: 5,
        comment: 'Una experiencia inolvidable. El hotel es precioso y el servicio es impecable.',
        date: '2025-02-18'
      },
      {
        id: 'review-4-2',
        userName: 'Isabel Mendoza',
        rating: 5,
        comment: 'Uno de los mejores hoteles en los que me he hospedado. La arquitectura colonial es impresionante.',
        date: '2025-03-25'
      }
    ],
    rating: 4.9,
    contactInfo: {
      phone: '+57 5 650 4700',
      email: 'reservations.santaclara@sofitel.com',
      website: 'www.sofitel.com/santaclara'
    },
    checkInTime: '15:00',
    checkOutTime: '12:00',
    policies: [
      'Se aceptan mascotas pequeñas',
      'No se permite fumar en las habitaciones',
      'Cancelación gratuita hasta 72 horas antes'
    ],
    featured: true
  },
  {
    id: 'hotel-5',
    name: 'Hacienda Venecia Coffee Lodge',
    description: 'Auténtica hacienda cafetera transformada en un encantador hotel boutique. Ofrece una experiencia única en medio de plantaciones de café en el Eje Cafetero.',
    location: {
      city: 'Manizales',
      region: 'Andina',
      address: 'Vereda El Rosario, a 20 minutos de Manizales',
      coordinates: {
        latitude: 5.0089,
        longitude: -75.5836
      }
    },
    stars: 4,
    priceRange: "$$",
    images: [
      'https://via.placeholder.com/400x300?text=Hacienda+Venecia+1',
      'https://via.placeholder.com/400x300?text=Hacienda+Venecia+2',
      'https://via.placeholder.com/400x300?text=Hacienda+Venecia+3'
    ],
    amenities: [
      'Piscina', 'Tour de café', 'Desayuno incluido', 'WiFi gratis',
      'Senderismo', 'Observación de aves', 'Restaurante orgánico'
    ],
    rooms: [
      {
        id: 'room-5-1',
        name: 'Habitación en Casa Principal',
        description: 'Acogedora habitación en la casa principal de la hacienda con decoración tradicional.',
        capacity: 2,
        pricePerNight: 280000,
        amenities: ['Vista al jardín', 'Decoración colonial', 'Baño privado'],
        images: ['https://via.placeholder.com/400x300?text=Main+House+Room'],
        available: true
      },
      {
        id: 'room-5-2',
        name: 'Cabaña del Cafetal',
        description: 'Cabaña privada rodeada de plantaciones de café con terraza y hamaca.',
        capacity: 4,
        pricePerNight: 420000,
        amenities: ['Terraza privada', 'Hamaca', 'Vista al cafetal', 'Baño con ducha al aire libre'],
        images: ['https://via.placeholder.com/400x300?text=Coffee+Farm+Cabin'],
        available: true
      }
    ],
    reviews: [
        {
          id: 'review-5-1',
          userName: 'Daniel Torres',
          rating: 5,
          comment: 'Una experiencia única. El tour del café es fascinante y las habitaciones son muy cómodas y auténticas.',
          date: '2025-01-05'
        },
        {
          id: 'review-5-2',
          userName: 'Camila Díaz',
          rating: 4.5,
          comment: 'Lugar mágico rodeado de naturaleza. Perfecto para desconectar y aprender sobre el café colombiano.',
          date: '2025-02-12'
        }
      ],
      rating: 4.8,
      contactInfo: {
        phone: '+57 310 423 1279',
        email: 'reservas@haciendavenecia.com',
        website: 'www.haciendavenecia.com'
      },
      checkInTime: '14:00',
      checkOutTime: '12:00',
      policies: [
        'Se aceptan niños de todas las edades',
        'Se pueden solicitar camas adicionales',
        'Se recomienda reservar el tour de café con anticipación'
      ],
      featured: true
    }
  ];
  
  // Métodos para acceder a los datos de hoteles
  export const getHotelById = (id: string): Hotel | undefined => {
    return HOTELS.find(hotel => hotel.id === id);
  };
  
  export const getHotelsByLocation = (city: string): Hotel[] => {
    return HOTELS.filter(hotel => hotel.location.city.toLowerCase() === city.toLowerCase());
  };
  
  export const getHotelsByRegion = (region: string): Hotel[] => {
    return HOTELS.filter(hotel => hotel.location.region.toLowerCase() === region.toLowerCase());
  };
  
  export const getFeaturedHotels = (): Hotel[] => {
    return HOTELS.filter(hotel => hotel.featured);
  };
  
  export const searchHotels = (query: string): Hotel[] => {
    const searchTerm = query.toLowerCase();
    return HOTELS.filter(hotel => 
      hotel.name.toLowerCase().includes(searchTerm) || 
      hotel.description.toLowerCase().includes(searchTerm) ||
      hotel.location.city.toLowerCase().includes(searchTerm) ||
      hotel.location.region.toLowerCase().includes(searchTerm) ||
      hotel.amenities.some(amenity => amenity.toLowerCase().includes(searchTerm))
    );
  };
  
  export const filterHotelsByPrice = (minPrice: string, maxPrice: string): Hotel[] => {
    const priceRanges = ["$", "$$", "$$$", "$$$$"];
    const minIndex = priceRanges.indexOf(minPrice);
    const maxIndex = priceRanges.indexOf(maxPrice);
    
    if (minIndex === -1 || maxIndex === -1) return HOTELS;
    
    return HOTELS.filter(hotel => {
      const hotelPriceIndex = priceRanges.indexOf(hotel.priceRange);
      return hotelPriceIndex >= minIndex && hotelPriceIndex <= maxIndex;
    });
  };
  
  export const filterHotelsByStars = (minStars: number): Hotel[] => {
    return HOTELS.filter(hotel => hotel.stars >= minStars);
  };
  
  export const filterHotelsByAmenities = (amenities: string[]): Hotel[] => {
    if (!amenities.length) return HOTELS;
    
    return HOTELS.filter(hotel => 
      amenities.every(amenity => 
        hotel.amenities.some(hotelAmenity => 
          hotelAmenity.toLowerCase().includes(amenity.toLowerCase())
        )
      )
    );
  };