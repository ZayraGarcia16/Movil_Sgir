import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Principal from './src/paginas/principal/Principal';
import SobreNosotros from './src/paginas/principal/SobreNosotros';
import Servicios from './src/paginas/principal/Servicios';
import ReservationForm from './src/paginas/formularios/Reservas';
import HotelDescripcion from './src/paginas/servicios/HotelDescripcion';
import ExcursionDescripcion from './src/paginas/servicios/ExcursionDescripcion';
import PaqueteDescripcion from './src/paginas/servicios/PaqueteDescripcion';
import ContactForm from './src/paginas/formularios/Contactos';

export type RootStackParamList = {
  Principal: undefined;
  SobreNosotros: undefined;
  Servicios: undefined;
  ReservationForm: undefined;
  HotelDescripcion: undefined;
  ExcursionDescripcion: undefined;
  PaqueteDescripcion: undefined;
  ContactForm: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="SobreNosotros" component={SobreNosotros} />
        <Stack.Screen name="Servicios" component={Servicios} />
        <Stack.Screen name="HotelDescripcion" component={HotelDescripcion} />
        <Stack.Screen name="ReservationForm" component={ReservationForm} />
        <Stack.Screen name="ExcursionDescripcion" component={ExcursionDescripcion} />
        <Stack.Screen name="PaqueteDescripcion" component={PaqueteDescripcion} />
        <Stack.Screen name="ContactForm" component={ContactForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
