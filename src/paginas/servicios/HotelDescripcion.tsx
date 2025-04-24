import React from "react";
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const HotelDescripcion = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Imagen principal del hotel */}
      <Image 
        source={require("../../../assets/inicio/colombia4.jpg")} 
        style={styles.mainImage} 
      />
      
      {/* Descripción del hotel */}
      <View style={styles.textContainer}>
        <Text style={styles.header}>Hotel de Lujo en el Corazón de Colombia</Text>
        <Text style={styles.subheader}>Escápate a un paraíso de confort y tranquilidad</Text>
        <Text style={styles.description}>
          Nuestro hotel ofrece una experiencia única de descanso, con un servicio personalizado,
          vistas espectaculares y habitaciones diseñadas para tu máxima comodidad. 
          Ubicado en el corazón de la ciudad, te brindamos acceso rápido a los principales puntos turísticos.
        </Text>
        
        {/* Características del hotel */}
        <View style={styles.featuresContainer}>
          <Text style={styles.featuresHeader}>Servicios Destacados:</Text>
          <View style={styles.featureItem}>
            <FontAwesome5 name="swimming-pool" size={28} color="#F39C12" />
            <Text style={styles.featureText}>Piscina Climatizada</Text>
          </View>
          <View style={styles.featureItem}>
            <FontAwesome5 name="utensils" size={28} color="#F39C12" />
            <Text style={styles.featureText}>Restaurante Gourmet</Text>
          </View>
          <View style={styles.featureItem}>
            <FontAwesome5 name="spa" size={28} color="#F39C12" />
            <Text style={styles.featureText}>Spa & Bienestar</Text>
          </View>
          <View style={styles.featureItem}>
            <FontAwesome5 name="bed" size={28} color="#F39C12" />
            <Text style={styles.featureText}>Habitaciones con Vista</Text>
          </View>
        </View>
      </View>
      
      {/* Testimonios */}
      <View style={styles.testimonialsContainer}>
        <Text style={styles.header}>Lo que dicen nuestros huéspedes</Text>
        <View style={styles.testimonialCard}>
          <Text style={styles.testimonialText}>
            "Un lugar maravilloso. La atención fue excelente, el hotel es espectacular, y la vista desde
            la habitación es de ensueño. Volveré sin duda alguna."
          </Text>
          <Text style={styles.testimonialName}>Carlos Gómez</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F7F7", // Fondo suave y elegante
    padding: 15,
  },
  mainImage: {
    width: "100%",
    height: 300,
    borderRadius: 25,
    marginBottom: 25,
    borderWidth: 3,
    borderColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 25,
  },
  textContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 30,
    padding: 30,
    marginBottom: 40,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 20,
    borderColor: "#EEE",
    borderWidth: 1,
  },
  header: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 15,
    fontFamily: "HelveticaNeue-Bold",
    letterSpacing: 1,
  },
  subheader: {
    fontSize: 20,
    color: "#7F8C8D",
    marginBottom: 25,
    fontFamily: "HelveticaNeue",
    fontStyle: "italic",
  },
  description: {
    fontSize: 18,
    color: "#34495E",
    lineHeight: 28,
    marginBottom: 30,
    textAlign: "justify",
    letterSpacing: 0.5,
    fontFamily: "HelveticaNeue",
  },
  featuresContainer: {
    marginTop: 20,
  },
  featuresHeader: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 20,
    fontFamily: "HelveticaNeue-Bold",
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    padding: 12,
    backgroundColor: "#F1C40F",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  featureText: {
    fontSize: 18,
    color: "#fff",
    marginLeft: 12,
    fontFamily: "HelveticaNeue",
    fontWeight: "500",
  },
  testimonialsContainer: {
    marginTop: 40,
    backgroundColor: "#ffffff",
    borderRadius: 30,
    padding: 30,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 20,
    borderColor: "#EEE",
    borderWidth: 1,
  },
  testimonialCard: {
    marginBottom: 25,
    padding: 25,
    backgroundColor: "#F9E4B7",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 15,
  },
  testimonialText: {
    fontSize: 18,
    color: "#7F8C8D",
    marginBottom: 15,
    fontStyle: "italic",
    lineHeight: 26,
  },
  testimonialName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2C3E50",
    fontFamily: "HelveticaNeue-Bold",
  },
});

export default HotelDescripcion;
