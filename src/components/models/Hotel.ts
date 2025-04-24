export interface Hotel {
    id: string;
    name: string;
    location: string;
    price: number;
    rating: number;
    image: string;
    description: string;
    amenities: string[];
    coordinates: {
      latitude: number;
      longitude: number;
    };
    region: string; // Por ejemplo: Caribe, Andina, Pacífica, etc.
  }
  
  // src/models/Package.ts
  export interface Package {
    id: string;
    name: string;
    locations: string[];
    duration: number; // días
    price: number;
    rating: number;
    image: string;
    description: string;
    includes: string[];
    itinerary: {
      day: number;
      activities: string[];
    }[];
    region: string;
  }
  
  // src/models/Tour.ts
  export interface Tour {
    id: string;
    name: string;
    location: string;
    duration: number; // horas
    price: number;
    rating: number;
    image: string;
    description: string;
    includes: string[];
    difficulty: 'Fácil' | 'Moderado' | 'Difícil';
    region: string;
  }
  
  // src/constants/destinations.ts
  export const REGIONS = [
    'Caribe',
    'Andina',
    'Pacífica',
    'Orinoquía',
    'Amazonía',
    'Insular'
  ];
  
  export const POPULAR_DESTINATIONS = [
    { name: 'Cartagena', region: 'Caribe' },
    { name: 'Bogotá', region: 'Andina' },
    { name: 'Medellín', region: 'Andina' },
    { name: 'San Andrés', region: 'Insular' },
    { name: 'Cali', region: 'Pacífica' },
    { name: 'Eje Cafetero', region: 'Andina' },
    { name: 'Tayrona', region: 'Caribe' },
    { name: 'Amazonas', region: 'Amazonía' }
  ];