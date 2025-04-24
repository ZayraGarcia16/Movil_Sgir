import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import HotelsScreen from '../screens/HotelsScreen';
import PackagesScreen from '../screens/PackagesScreen';
import ToursScreen from '../screens/ToursScreen';
import HotelDetailScreen from '../screens/HotelDetailScreen';
import PackageDetailScreen from '../screens/PackageDetailScreen';
import TourDetailScreen from '../screens/TourDetailScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs: React.FC = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName: keyof typeof MaterialIcons.glyphMap = 'home';

        switch (route.name) {
          case 'Inicio':
            iconName = 'home';
            break;
          case 'Hoteles':
            iconName = 'hotel';
            break;
          case 'Paquetes':
            iconName = 'card-travel';
            break;
          case 'Excursiones':
            iconName = 'terrain';
            break;
        }

        return <MaterialIcons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#FF6B6B',
      tabBarInactiveTintColor: 'gray',
      headerStyle: {
        backgroundColor: '#4ECDC4',
      },
      headerTintColor: '#fff',
      tabBarStyle: {
        paddingVertical: 8,
        height: 60,
      },
      tabBarLabelStyle: {
        fontSize: 12,
      },
    })}
  >
    <Tab.Screen name="Inicio" component={HomeScreen} />
    <Tab.Screen name="Hoteles" component={HotelsScreen} />
    <Tab.Screen name="Paquetes" component={PackagesScreen} />
    <Tab.Screen name="Excursiones" component={ToursScreen} />
  </Tab.Navigator>
);

const AppNavigator: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4ECDC4',
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HotelDetail"
        component={HotelDetailScreen}
        options={{ title: 'Detalles del Hotel' }}
      />
      <Stack.Screen
        name="PackageDetail"
        component={PackageDetailScreen}
        options={{ title: 'Detalles del Paquete' }}
      />
      <Stack.Screen
        name="TourDetail"
        component={TourDetailScreen}
        options={{ title: 'Detalles de la Excursión' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
