import { TourPackage } from '../package';

export const PACKAGES: TourPackage[] = [
  {
    id: 'pkg-1',
    name: 'Aventura en el Eje Cafetero',
    description: 'Descubre la magia del Eje Cafetero colombiano con este paquete que combina cultura cafetera, naturaleza exuberante y aventura. Visita plantaciones de café, el Valle del Cocora y disfruta de actividades al aire libre.',
    destination: 'Eje Cafetero',
    region: 'Andina',
    duration: {
      days: 5,
      nights: 4
    },
    images: [
      'https://via.placeholder.com/400x300?text=Eje+Cafetero+1',
      'https://via.placeholder.com/400x300?text=Eje+Cafetero+2',
      'https://via.placeholder.com/400x300?text=Eje+Cafetero+3'
    ],
    price: {
      amount: 1800000,
      currency: 'COP',
      perPerson: true,
      discountedFrom: 2100000
    },
    hotel: {
      name: 'Hacienda Venecia Coffee Lodge',
      stars: 4,
      location: {
        city: 'Manizales',
        region: 'Andina',
        address: 'Vereda El Rosario',
        coordinates: {
          latitude: 5.0089,
          longitude: -75.5836
        }
      }
    },
    activities: [
      {
        id: 'act-1-1',
        name: 'Tour del Café',
        description: 'Aprende todo sobre el proceso del café, desde su siembra hasta la taza final. Incluye degustación de diferentes variedades.',
        duration: '3 horas',
        included: ['Guía especializado', 'Degustación de café', 'Transporte local'],
        imageUrl: 'https://via.placeholder.com/400x300?text=Coffee+Tour'
      },
      {
        id: 'act-1-2',
        name: 'Valle del Cocora',
        description: 'Caminata por el Valle del Cocora, hogar de las emblemáticas palmas de cera, el árbol nacional de Colombia.',
        duration: 'Día completo',
        included: ['Guía bilingüe', 'Transporte', 'Almuerzo típico'],
        imageUrl: 'https://via.placeholder.com/400x300?text=Cocora+Valley'
      },
      {
        id: 'act-1-3',
        name: 'Canopy en Bosque del Samán',
        description: 'Vive la adrenalina deslizándote por cables sobre el dosel del bosque con vistas panorámicas impresionantes.',
        duration: '2 horas',
        included: ['Equipo de seguridad', 'Instructores certificados', 'Refrigerio'],
        imageUrl: 'https://via.placeholder.com/400x300?text=Canopy'
      }
    ],
    itinerary: [
      {
        day: 1,
        title: 'Llegada a Armenia',
        description: 'Recogida en el aeropuerto de Armenia y traslado a la hacienda cafetera. Cena de bienvenida y presentación del itinerario.',
        activities: ['Check-in en la hacienda', 'Cena de bienvenida', 'Charla introductoria sobre el Eje Cafetero'],
        meals: {
          breakfast: false,
          lunch: false,
          dinner: true
        }
      },
      {
        day: 2,
        title: 'Experiencia Cafetera',
        description: 'Día dedicado a conocer el proceso del café y la vida en una hacienda cafetera tradicional.',
        activities: ['Desayuno típico', 'Tour del Café', 'Almuerzo campesino', 'Taller de catación de café'],
        meals: {
          breakfast: true,
          lunch: true,
          dinner: true
        }
      },
      {
        day: 3,
        title: 'Valle del Cocora y Salento',
        description: 'Visita al emblemático Valle del Cocora y al pintoresco pueblo de Salento.',
        activities: ['Caminata en el Valle del Cocora', 'Almuerzo en Salento', 'Tiempo libre para compras artesanales', 'Degustación de cócteles locales'],
        meals: {
          breakfast: true,
          lunch: true,
          dinner: true
        }
      },
      {
        day: 4,
        title: 'Aventura y Naturaleza',
        description: 'Día de actividades al aire libre y aventura en medio de paisajes naturales.',
        activities: ['Canopy en Bosque del Samán', 'Almuerzo en mirador panorámico', 'Baño en río natural', 'Fogata nocturna con historias locales'],
        meals: {
          breakfast: true,
          lunch: true,
          dinner: true
        }
      },
      {
        day: 5,
        title: 'Regreso',
        description: 'Desayuno en la hacienda y traslado al aeropuerto para tomar vuelo de regreso.',
        activities: ['Desayuno buffet', 'Check-out', 'Tiempo libre para últimas compras', 'Traslado al aeropuerto'],
        meals: {
          breakfast: true,
          lunch: false,
          dinner: false
        }
      }
    ],
    included: [
      'Alojamiento en hacienda cafetera (4 noches)',
      'Alimentación según itinerario (4 desayunos, 3 almuerzos, 4 cenas)',
      'Traslados aeropuerto-hotel-aeropuerto',
      'Guía local bilingüe',
      'Entradas a todas las actividades mencionadas',
      'Seguro de viaje'
    ],
    notIncluded: [
      'Vuelos',
      'Gastos personales',
      'Propinas',
      'Actividades opcionales no mencionadas en el itinerario',
      'Bebidas alcohólicas'
    ],
    startDates: [
      '2025-05-01',
      '2025-05-15',
      '2025-06-01',
      '2025-06-15',
      '2025-07-01'
    ],
    minPeople: 2,
    maxPeople: 12,
    featured: true,
    rating: 4.8,
    reviews: [
      {
        id: 'rev-1-1',
        userName: 'Alejandro Ruiz',
        rating: 5,
        comment: 'Una experiencia inolvidable. El alojamiento en la hacienda cafetera fue espectacular y las actividades perfectamente planificadas.',
        date: '2025-01-15'
      },
      {
        id: 'rev-1-2',
        userName: 'María Eugenia Vargas',
        rating: 4.5,
        comment: 'Excelente paquete, muy completo. Las visitas guiadas muy interesantes y el guía muy profesional. Recomendable 100%.',
        date: '2025-02-03'
      }
    ],
    tags: ['naturaleza', 'aventura', 'café', 'cultural', 'familiar']
  },
  {
    id: 'pkg-2',
    name: 'Caribe Colombiano: Sol y Historia',
    description: 'Descubre la magia del Caribe colombiano con este paquete que combina las playas paradisíacas de Santa Marta con la historia colonial de Cartagena de Indias.',
    destination: 'Cartagena y Santa Marta',
    region: 'Caribe',
    duration: {
      days: 7,
      nights: 6
    },
    images: [
      'https://via.placeholder.com/400x300?text=Cartagena+1',
      'https://via.placeholder.com/400x300?text=Santa+Marta+2',
      'https://via.placeholder.com/400x300?text=Playa+Blanca+3'
    ],
    price: {
      amount: 2500000,
      currency: 'COP',
      perPerson: true
    },
    hotel: {
      name: 'Hotel Boutique Casa del Coliseo / Hotel Santa Marta Resort',
      stars: 4.5,
      location: {
        city: 'Cartagena / Santa Marta',
        region: 'Caribe',
        address: 'Múltiples ubicaciones',
        coordinates: {
          latitude: 10.4254,
          longitude: -75.5508
        }
      }
    },
    activities: [
      {
        id: 'act-2-1',
        name: 'Tour por Ciudad Amurallada',
        description: 'Recorrido guiado por las calles empedradas y coloridas de la histórica Ciudad Amurallada de Cartagena.',
        duration: '3 horas',
        included: ['Guía historiador', 'Entradas a monumentos principales', 'Bebida refrescante'],
        imageUrl: 'https://via.placeholder.com/400x300?text=Walled+City'
      },
      {
        id: 'act-2-2',
        name: 'Día en Islas del Rosario',
        description: 'Excursión en lancha a las paradisíacas Islas del Rosario para disfrutar de playas cristalinas y snorkel.',
        duration: 'Día completo',
        included: ['Transporte marítimo', 'Almuerzo típico', 'Equipo de snorkel'],
        imageUrl: 'https://via.placeholder.com/400x300?text=Rosario+Islands'
      },
      {
        id: 'act-2-3',
        name: 'Parque Tayrona',
        description: 'Visita al impresionante Parque Nacional Tayrona, donde la selva tropical se encuentra con el mar Caribe.',
        duration: 'Día completo',
        included: ['Entrada al parque', 'Guía naturalista', 'Almuerzo típico', 'Transporte'],
        imageUrl: 'https://via.placeholder.com/400x300?text=Tayrona+Park'
      }
    ],
    itinerary: [
      {
        day: 1,
        title: 'Llegada a Cartagena',
        description: 'Bienvenida en el aeropuerto de Cartagena y traslado al hotel boutique en el centro histórico.',
        activities: ['Recibimiento con cóctel de bienvenida', 'Check-in en hotel boutique', 'Tiempo libre para explorar los alrededores'],
        meals: {
          breakfast: false,
          lunch: false,
          dinner: true
        }
      },
      {
        day: 2,
        title: 'Ciudad Amurallada',
        description: 'Día dedicado a conocer la historia y cultura de la Ciudad Amurallada de Cartagena.',
        activities: ['Tour histórico por la Ciudad Amurallada', 'Visita al Castillo de San Felipe', 'Tarde libre para explorar museos'],
        meals: {
          breakfast: true,
          lunch: false,
          dinner: true
        }
      },
      {
        day: 3,
        title: 'Islas del Rosario',
        description: 'Excursión a las paradisíacas Islas del Rosario con tiempo para disfrutar de sus playas.',
        activities: ['Viaje en lancha a Islas del Rosario', 'Snorkel en arrecifes de coral', 'Almuerzo caribeño en la playa'],
        meals: {
          breakfast: true,
          lunch: true,
          dinner: false
        }
      },
      {
        day: 4,
        title: 'Traslado a Santa Marta',
        description: 'Viaje de Cartagena a Santa Marta con parada en el Volcán del Totumo.',
        activities: ['Baño en el Volcán del Totumo', 'Almuerzo en ruta', 'Llegada y check-in en Santa Marta'],
        meals: {
          breakfast: true,
          lunch: true,
          dinner: true
        }
      },
      {
        day: 5,
        title: 'Parque Tayrona',
        description: 'Visita al majestuoso Parque Nacional Tayrona, un paraíso natural.',
        activities: ['Caminata guiada por senderos del parque', 'Tiempo libre en playa Cristal', 'Observación de fauna local'],
        meals: {
          breakfast: true,
          lunch: true,
          dinner: false
        }
      },
      {
        day: 6,
        title: 'Minca',
        description: 'Excursión a Minca, un pueblo de montaña en la Sierra Nevada de Santa Marta.',
        activities: ['Visita a finca cafetera', 'Cascadas de Marinka', 'Observación de aves', 'Cena de despedida'],
        meals: {
          breakfast: true,
          lunch: true,
          dinner: true
        }
      },
      {
        day: 7,
        title: 'Regreso',
        description: 'Desayuno en el hotel y traslado al aeropuerto para vuelo de regreso.',
        activities: ['Desayuno buffet', 'Check-out', 'Traslado al aeropuerto'],
        meals: {
          breakfast: true,
          lunch: false,
          dinner: false
        }
      }
    ],
    included: [
      'Alojamiento en hoteles 4.5 estrellas (3 noches en Cartagena, 3 noches en Santa Marta)',
      'Alimentación según itinerario (6 desayunos, 4 almuerzos, 4 cenas)',
      'Traslados aeropuerto-hotel-aeropuerto',
      'Transporte terrestre Cartagena-Santa Marta',
      'Guía bilingüe durante todo el recorrido',
      'Entradas a todos los sitios mencionados',
      'Seguro de viaje'
    ],
    notIncluded: [
      'Vuelos',
      'Impuesto de entrada a Islas del Rosario',
      'Gastos personales',
      'Propinas',
      'Comidas y bebidas no especificadas'
    ],
    startDates: [
      '2025-05-10',
      '2025-06-05',
      '2025-07-15',
      '2025-08-10',
      '2025-09-05'
    ],
    minPeople: 2,
    maxPeople: 16,
    featured: true,
    rating: 4.9,
    reviews: [
      {
        id: 'rev-2-1',
        userName: 'Laura Gómez',
        rating: 5,
        comment: 'El mejor viaje que he hecho. Cartagena es mágica y el Parque Tayrona un paraíso. Todo perfectamente organizado.',
        date: '2025-01-20'
      },
      {
        id: 'rev-2-2',
        userName: 'Santiago Mejía',
        rating: 4.8,
        comment: 'Excelente combinación de historia y naturaleza. Los hoteles son de primera calidad y los guías muy conocedores.',
        date: '2025-02-15'
      }
    ],
    tags: ['playa', 'historia', 'cultural', 'naturaleza', 'romántico']
  },
  {
    id: 'pkg-3',
    name: 'Colombia Mágica: De los Andes al Caribe',
    description: 'Un recorrido completo por los principales destinos de Colombia: Bogotá, Medellín, Eje Cafetero y Cartagena. La perfecta introducción a la diversidad colombiana.',
    destination: 'Múltiples destinos',
    region: 'Múltiple',
    duration: {
      days: 12,
      nights: 11
    },
    images: [
      'https://via.placeholder.com/400x300?text=Bogota+1',
      'https://via.placeholder.com/400x300?text=Medellin+2',
      'https://via.placeholder.com/400x300?text=Cartagena+3'
    ],
    price: {
      amount: 4200000,
      currency: 'COP',
      perPerson: true,
      discountedFrom: 4600000
    },
    activities: [
      {
        id: 'act-3-1',
        name: 'Tour histórico por La Candelaria',
        description: 'Recorrido por el barrio histórico de Bogotá, incluyendo visitas al Museo del Oro y Monserrate.',
        duration: 'Día completo',
        included: ['Guía especializado', 'Almuerzo', 'Entradas a museos', 'Teleférico a Monserrate'],
        imageUrl: 'https://via.placeholder.com/400x300?text=La+Candelaria'
      },
      {
        id: 'act-3-2',
        name: 'Tour de transformación urbana en Medellín',
        description: 'Descubre la transformación de Medellín visitando la Comuna 13, el Metrocable y proyectos urbanos innovadores.',
        duration: '6 horas',
        included: ['Guía local', 'Transporte', 'Refrigerio', 'Ticket de Metrocable'],
        imageUrl: 'https://via.placeholder.com/400x300?text=Comuna+13'
      },