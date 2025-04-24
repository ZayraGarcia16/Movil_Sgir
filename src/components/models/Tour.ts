export interface TourGuide {
    id: string;
    name: string;
    bio: string;
    experience: number; // Años de experiencia
    languages: string[];
    photo: string;
    specialties: string[];
    rating: number;
  }
  
  export interface TourReview {
    id: string;
    userName: string;
    rating: number;
    comment: string;
    date: string;
    photos?: string[];
  }
  
  export interface TourLocation {
    name: string;
    description: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    visitDuration: string; // Formato: "30 minutos", "1 hora", etc.
    imageUrl: string;
  }
  
  export interface Tour {
    id: string;
    name: string;
    description: string;
    destination: string;
    region: string;
    duration: string; // Formato: "2 horas", "Día completo", etc.
    startTime: string;
    endTime: string;
    price: {
      adult: number;
      child: number;
      currency: string;
    };
    images: string[];
    includedServices: string[];
    excludedServices: string[];
    meetingPoint: {
      name: string;
      address: string;
      coordinates: {
        latitude: number;
        longitude: number;
      };
    };
    tourGuides: TourGuide[];
    locations: TourLocation[];
    recommendations: string[];
    difficulty: 'Fácil' | 'Moderado' | 'Difícil';
    categories: string[]; // "Naturaleza", "Cultural", "Aventura", etc.
    languages: string[]; // Idiomas disponibles
    accessibility: boolean; // Accesible para personas con movilidad reducida
    minParticipants: number;
    maxParticipants: number;
    rating: number;
    reviews: TourReview[];
    featured?: boolean;
    availableDays: ('lunes' | 'martes' | 'miércoles' | 'jueves' | 'viernes' | 'sábado' | 'domingo')[];
  }