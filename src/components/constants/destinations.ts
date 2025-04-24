
export interface Destination {
    id: string;
    name: string;
    region: string;
    description: string;
    image: string;
    rating: number;
    highlights: string[];
    coordinates: {
      latitude: number;
      longitude: number;
    };
  }
  
  export const DESTINATIONS: Destination[] = [
    {
      id: 'cartagena',
      name: 'Cartagena',
      region: 'Caribe',
      description: 'Ciudad amurallada con hermosas playas y rica historia colonial. La Ciudad Vieja de Cartagena, fundada en el siglo XVI, está rodeada por 13 km de murallas y fortalezas construidas para proteger la ciudad.',
      image: 'https://via.placeholder.com/400x300?text=Cartagena',
      rating: 4.8,
      highlights: ['Ciudad Amurallada', 'Castillo San Felipe', 'Islas del Rosario', 'Playa Blanca'],
      coordinates: {
        latitude: 10.3932,
        longitude: -75.4832
      }
    },
    {
      id: 'medellin',
      name: 'Medellín',
      region: 'Andina',
      description: 'La Ciudad de la Eterna Primavera, reconocida por su agradable clima y sus innovaciones en urbanismo. Medellín ha pasado por una transformación increíble para convertirse en una de las ciudades más innovadoras del mundo.',
      image: 'https://via.placeholder.com/400x300?text=Medellin',
      rating: 4.7,
      highlights: ['Comuna 13', 'Parque Explora', 'Plaza Botero', 'Metrocable'],
      coordinates: {
        latitude: 6.2476,
        longitude: -75.5709
      }
    },
    {
      id: 'bogota',
      name: 'Bogotá',
      region: 'Andina',
      description: 'Capital de Colombia con gran riqueza cultural y arquitectónica. Bogotá ofrece una mezcla única de historia colonial y arquitectura moderna, con museos de clase mundial y una vibrante escena gastronómica.',
      image: 'https://via.placeholder.com/400x300?text=Bogota',
      rating: 4.5,
      highlights: ['Monserrate', 'Museo del Oro', 'La Candelaria', 'Zona T'],
      coordinates: {
        latitude: 4.7110,
        longitude: -74.0721
      }
    },
    {
      id: 'santamarta',
      name: 'Santa Marta',
      region: 'Caribe',
      description: 'La ciudad más antigua de Colombia, con hermosas playas y el parque Tayrona. Santa Marta es el punto de partida ideal para explorar la Sierra Nevada de Santa Marta y el Parque Nacional Natural Tayrona.',
      image: 'https://via.placeholder.com/400x300?text=SantaMarta',
      rating: 4.6,
      highlights: ['Parque Tayrona', 'Minca', 'Bahía de Taganga', 'Ciudad Perdida'],
      coordinates: {
        latitude: 11.2404,
        longitude: -74.2110
      }
    },
    {
      id: 'sanandres',
      name: 'San Andrés',
      region: 'Insular',
      description: 'Isla paradisíaca en el Caribe con aguas cristalinas y arrecifes de coral. El Mar de los Siete Colores rodea esta isla con sus tonalidades de azul que maravillan a todos los visitantes.',
      image: 'https://via.placeholder.com/400x300?text=SanAndres',
      rating: 4.7,
      highlights: ['Mar de Siete Colores', 'Johnny Cay', 'Hoyo Soplador', 'West View'],
      coordinates: {
        latitude: 12.5567,
        longitude: -81.7060
      }
    },
    {
      id: 'cafetera',
      name: 'Eje Cafetero',
      region: 'Andina',
      description: 'Región famosa por sus plantaciones de café y paisajes montañosos. El Paisaje Cultural Cafetero fue declarado Patrimonio de la Humanidad por la UNESCO en 2011.',
      image: 'https://via.placeholder.com/400x300?text=EjeCafetero',
      rating: 4.9,
      highlights: ['Valle del Cocora', 'Salento', 'Parque del Café', 'Haciendas Cafeteras'],
      coordinates: {
        latitude: 4.8143,
        longitude: -75.6946
      }
    },
    {
      id: 'cali',
      name: 'Cali',
      region: 'Pacífico',
      description: 'Capital mundial de la salsa, con vibrante cultura y excelente gastronomía. Cali es famosa por sus bailarines de salsa, festivales y por su ambiente festivo durante todo el año.',
      image: 'https://via.placeholder.com/400x300?text=Cali',
      rating: 4.4,
      highlights: ['Zoológico de Cali', 'Cristo Rey', 'Barrio San Antonio', 'Escuelas de Salsa'],
      coordinates: {
        latitude: 3.4516,
        longitude: -76.5320
      }
    },
    {
      id: 'guajira',
      name: 'La Guajira',
      region: 'Caribe',
      description: 'Desierto impresionante donde se encuentra el punto más al norte de Sudamérica. La Guajira ofrece paisajes únicos donde el desierto se encuentra con el mar.',
      image: 'https://via.placeholder.com/400x300?text=LaGuajira',
      rating: 4.5,
      highlights: ['Cabo de la Vela', 'Punta Gallinas', 'Pilón de Azúcar', 'Cultura Wayúu'],
      coordinates: {
        latitude: 12.1700,
        longitude: -71.1900
      }
    }
  ];
  
  export const getDestinationById = (id: string): Destination | undefined => {
    return DESTINATIONS.find(destination => destination.id === id);
  };
  
  export const getDestinationsByRegion = (region: string): Destination[] => {
    return DESTINATIONS.filter(destination => destination.region === region);
  };
  
  export const searchDestinations = (query: string): Destination[] => {
    const searchTerm = query.toLowerCase();
    return DESTINATIONS.filter(destination => 
      destination.name.toLowerCase().includes(searchTerm) || 
      destination.description.toLowerCase().includes(searchTerm) ||
      destination.region.toLowerCase().includes(searchTerm) ||
      destination.highlights.some(highlight => highlight.toLowerCase().includes(searchTerm))
    );
  };