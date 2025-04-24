import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'; // Usamos FontAwesome5 para más iconos

const Servicios = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nuestros Servicios</Text>
      </View>

      {/* Contenedor de Servicios */}
      <View style={styles.servicesContainer}>
        {/* Servicio de Hoteles */}
        <View style={styles.serviceItem}>
          <Icon name="bed" size={60} color="#4CAF50" style={styles.icon} />
          <Text style={styles.serviceName}>Hoteles</Text>
          <Text style={styles.serviceDescription}>Hospedaje de lujo, confort y seguridad.</Text>
          <TouchableOpacity style={styles.serviceButton}>
            <Text style={styles.serviceButtonText}>Ver Más</Text>
          </TouchableOpacity>
        </View>

        {/* Servicio de Excursiones */}
        <View style={styles.serviceItem}>
          <Icon name="hiking" size={60} color="#FF9800" style={styles.icon} />
          <Text style={styles.serviceName}>Excursiones</Text>
          <Text style={styles.serviceDescription}>Explora nuevos destinos con nosotros.</Text>
          <TouchableOpacity style={styles.serviceButton}>
            <Text style={styles.serviceButtonText}>Ver Más</Text>
          </TouchableOpacity>
        </View>

        {/* Servicio de Paquetes Turísticos */}
        <View style={styles.serviceItem}>
          <Icon name="globe-americas" size={60} color="#03A9F4" style={styles.icon} />
          <Text style={styles.serviceName}>Paquetes Turísticos</Text>
          <Text style={styles.serviceDescription}>Ofrecemos paquetes completos a destinos exóticos.</Text>
          <TouchableOpacity style={styles.serviceButton}>
            <Text style={styles.serviceButtonText}>Ver Más</Text>
          </TouchableOpacity>
        </View>

        {/* Servicio de Comida */}
        <View style={styles.serviceItem}>
          <Icon name="utensils" size={60} color="#9C27B0" style={styles.icon} />
          <Text style={styles.serviceName}>Comida</Text>
          <Text style={styles.serviceDescription}>Deliciosos platillos locales e internacionales.</Text>
          <TouchableOpacity style={styles.serviceButton}>
            <Text style={styles.serviceButtonText}>Ver Más</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4', 
  },
  header: {
    backgroundColor: '#ffffff', 
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center', 
    padding: 10,
    marginTop: 20,
  },
  serviceItem: {
    backgroundColor: '#ffffff', 
    borderRadius: 12,
    padding: 20,
    width: 160, 
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginHorizontal: 10, 
  },
  icon: {
    marginBottom: 15,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  serviceDescription: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginBottom: 15,
  },
  serviceButton: {
    backgroundColor: '#333',
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
    borderRadius: 8,
  },
  serviceButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Servicios;
