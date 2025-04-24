import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Animated } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const SobreNosotros = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const slideAnim = useState(new Animated.Value(-250))[0]; // Animación para el menú lateral

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    Animated.timing(slideAnim, {
      toValue: menuOpen ? -250 : 0, // Mover el menú de fuera a dentro
      duration: 300,
      useNativeDriver: true, 
    }).start();
  };

  return (
    <ScrollView style={styles.container}>
      {/* Menú Lateral */}
      <Animated.View style={[styles.menuContainer, { left: slideAnim }]}>
        <TouchableOpacity style={styles.menuItem} onPress={toggleMenu}>
          <Text style={styles.menuItemText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={toggleMenu}>
          <Text style={styles.menuItemText}>Sobre Nosotros</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={toggleMenu}>
          <Text style={styles.menuItemText}>Servicios</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={toggleMenu}>
          <Text style={styles.menuItemText}>Contacto</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Botón para abrir/cerrar menú */}
      <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
        <Text style={styles.menuButtonText}>{menuOpen ? 'Cerrar Menú' : 'Abrir Menú'}</Text>
      </TouchableOpacity>

      {/* Encabezado */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Sobre Nosotros</Text>
      </View>

      {/* Sección de Presentación de la Empresa */}
      <View style={styles.aboutSection}>
        <Image
          source={require('../../../assets/logo.png')} // Imagen desde la carpeta assets
          style={styles.companyImage}
        />
        <Text style={styles.aboutText}>
          Somos una empresa dedicada a la medición de la contaminación del aire generada por diferentes tipos de vehículos. Nuestro objetivo es ofrecer soluciones innovadoras para reducir la huella de carbono y promover un entorno más sostenible.
        </Text>
      </View>

      {/* Información del Jefe */}
      <View style={styles.leaderSection}>
        <Image
          source={require('../../../assets/logo.png')} // Imagen del jefe desde la carpeta assets
          style={styles.leaderImage}
        />
        <View style={styles.leaderTextContainer}>
          <Text style={styles.leaderName}>Juan Pérez</Text>
          <Text style={styles.leaderPosition}>CEO & Fundador</Text>
        </View>
      </View>

      {/* Mapa de la Ubicación */}
      <View style={styles.mapSection}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 4.60971, 
            longitude: -74.08175,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate={{ latitude: 4.60971, longitude: -74.08175 }} title="Nuestra Oficina" />
        </MapView>
      </View>

      {/* Sección de Contacto */}
      <View style={styles.contactSection}>
        <Text style={styles.contactTitle}>Contáctanos</Text>
        <Text style={styles.contactText}>Teléfono: (123) 456-7890</Text>
        <Text style={styles.contactText}>Email: contacto@empresa.com</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  // Estilos para el Menú Lateral (ahora blanco)
  menuContainer: {
    position: 'absolute',
    top: 0,
    left: -250, // Inicialmente fuera de la pantalla
    height: '100%',
    width: 250,
    backgroundColor: '#fff', // Menú de color blanco
    paddingTop: 60,
    zIndex: 1, // Asegurarse que el menú esté encima del contenido
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', // Delimitador entre elementos
  },
  menuItemText: {
    color: '#333', // Color del texto del menú
    fontSize: 18,
  },
  // Estilos del Botón de Menú
  menuButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 5,
  },
  menuButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  // Estilos del Encabezado
  header: {
    backgroundColor: '#333',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  // Sección de la Empresa
  aboutSection: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 8,
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  companyImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  aboutText: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
    lineHeight: 24,
  },
  // Información del Líder
  leaderSection: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 10,
    marginHorizontal: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leaderImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  leaderTextContainer: {
    marginLeft: 15,
  },
  leaderName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  leaderPosition: {
    fontSize: 14,
    color: '#777',
  },
  // Sección del Mapa
  mapSection: {
    marginTop: 20,
    height: 300,
    marginHorizontal: 15,
    borderRadius: 8,
    overflow: 'hidden',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  // Sección de Contacto
  contactSection: {
    backgroundColor: '#fff',
    marginTop: 20,
    marginHorizontal: 15,
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  contactTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactText: {
    fontSize: 16,
    color: '#333',
  },
});

export default SobreNosotros;
