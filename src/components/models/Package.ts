import { Hotel } from './hotels/package.model';

export interface PackageActivity {
  id: string;
  name: string;
  description: string;
  duration: string; // Formato: "2 horas", "Día completo", etc.
  included: string[];
  imageUrl: string;
}

export interface PackageItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
  meals: {
    breakfast: boolean;
    lunch: boolean;
    dinner: boolean;
  };
}

export interface PackagePrice {
  amount: number;
  currency: string;
  perPerson: boolean;
  discountedFrom?: number;
}

export interface TourPackage {
  id: string;
  name: string;
  description: string;
  destination: string;
  region: string;
  duration: {
    days: number;
    nights: number;
  };
  images: string[];
  price: PackagePrice;
  hotel?: Partial<Hotel>;
  activities: PackageActivity[];
  itinerary: PackageItineraryDay[];
  included: string[];
  notIncluded: string[];
  startDates: string[]; // Formato: "YYYY-MM-DD"
  minPeople: number;
  maxPeople: number;
  featured?: boolean;
  rating: number;
  reviews: {
    id: string;
    userName: string;
    rating: number;
    comment: string;
    date: string;
  }[];
  tags: string[];
}