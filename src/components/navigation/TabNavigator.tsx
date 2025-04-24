import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import HotelsScreen from '../screens/HotelsScreen';
import PackagesScreen from '../screens/PackagesScreen';
import ToursScreen from '../screens/ToursScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Hoteles') {
            iconName = 'hotel';
          } else if (route.name === 'Paquetes') {
            iconName = 'card-travel';
          } else if (route.name === 'Excursiones') {
            iconName = 'hiking';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FF6B6B',
        tabBarInactiveTintColor: 'gray',
        headerStyle: {
          backgroundColor: '#4ECDC4',
        },
        headerTintColor: '#fff',
      })}
    >
      <Tab.Screen name="Hoteles" component={HotelsScreen} />
      <Tab.Screen name="Paquetes" component={PackagesScreen} />
      <Tab.Screen name="Excursiones" component={ToursScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;