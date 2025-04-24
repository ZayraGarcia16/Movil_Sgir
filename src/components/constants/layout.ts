import { Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

// Tamaños base para diseño responsive
export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;

// Factor de escala basado en un diseño de 375px de ancho (iPhone X)
const baseWidth = 375;
export const scale = (size: number) => (SCREEN_WIDTH / baseWidth) * size;

// Padding y márgenes estándar
export const SPACING = {
  xs: scale(4),
  sm: scale(8),
  md: scale(16),
  lg: scale(24),
  xl: scale(32),
  xxl: scale(48),
};

// Bordes redondeados estándar
export const BORDER_RADIUS = {
  xs: scale(4),
  sm: scale(8),
  md: scale(12),
  lg: scale(16),
  xl: scale(24),
  round: scale(999), // Para elementos circulares
};

// Tamaños de texto
export const FONT_SIZE = {
  xs: scale(10),
  sm: scale(12),
  md: scale(14),
  lg: scale(16),
  xl: scale(18),
  xxl: scale(20),
  xxxl: scale(24),
  title: scale(28),
  header: scale(32),
};

// Grosor de fuente
export const FONT_WEIGHT = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  heavy: '800',
};

// Valores de Z-index para manejo de capas
export const Z_INDEX = {
  base: 0,
  card: 10,
  dialog: 20,
  modal: 30,
  overlay: 40,
  tooltip: 50,
};

// Ajustes específicos de plataforma
export const PLATFORM = {
  IS_IOS: Platform.OS === 'ios',
  IS_ANDROID: Platform.OS === 'android',
  STATUS_BAR_HEIGHT: Platform.OS === 'ios' ? 44 : StatusBar.currentHeight || 0,
  HEADER_HEIGHT: Platform.OS === 'ios' ? 88 : (StatusBar.currentHeight || 0) + 56,
  BOTTOM_TAB_HEIGHT: Platform.OS === 'ios' ? 83 : 64,
};

// Tamaños para componentes específicos
export const COMPONENT_SIZES = {
  buttonHeight: scale(48),
  inputHeight: scale(48),
  iconSize: scale(24),
  cardHeight: scale(200),
  avatarSize: scale(40),
  thumbnailSize: scale(80),
};

// Sombras estándar
export const SHADOW_STYLES = {
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 4,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
};