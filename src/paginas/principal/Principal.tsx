import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, StyleSheet, FlatList, Dimensions, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Tipamos las rutas
type RootStackParamList = {
  Principal: undefined;
  ContactForm: undefined;
  SobreNosotros: undefined;
  Servicios: undefined;
  ReservationForm: undefined;
  HotelDescripcion: { service: { title: string; description: string } };
  PaqueteDescripcion: { service: { title: string; description: string } };
  ExcursionDescripcion: { service: { title: string; description: string } };

};

type Props = NativeStackScreenProps<RootStackParamList, "Principal">;

const { width } = Dimensions.get("window");

const sliderData = [
  { image: require("../../../assets/inicio/colombia2.jpeg"), text: "Explora Colombia con nosotros" },
  { image: require("../../../assets/inicio/colombia2.jpeg"), text: "Vive la mejor experiencia turística" },
  { image: require("../../../assets/inicio/colombia2.jpeg"), text: "Descubre lugares increíbles" },
];

// Definimos los servicios sin la propiedad screen, ya que usaremos el title para diferenciarlos
const services = [
  { icon: "hotel", title: "Hotel", description: "Alojamiento cómodo y seguro." },
  { icon: "suitcase-rolling", title: "Paquetes", description: "Paquetes turísticos personalizados." },
  { icon: "hiking", title: "Excursiones", description: "Aventuras en destinos únicos." },
];

const testimonials = [
  { image: require("../../../assets/inicio/colombia2.jpeg"), name: "Lupita Perez", review: "¡Increíble experiencia! Todo fue perfecto." },
  { image: require("../../../assets/inicio/colombia2.jpeg"), name: "Karen yinet", review: "Muy recomendado, excelente servicio." },
  { image: require("../../../assets/inicio/colombia2.jpeg"), name: "Yayan", review: "Un viaje inolvidable, gracias a ustedes." },
];

const Principal: React.FC<Props> = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
    }, 3000); // El slider cambia cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (event: any) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(slideIndex);
  };

  const handleServiceClick = (service: { title: string; description: string }) => {
    if (service.title === "Hotel") {
      navigation.navigate("HotelDescripcion", { service });
    } else if (service.title === "Paquetes") {
      navigation.navigate("PaqueteDescripcion", { service });
    } else if (service.title === "Excursiones") {
      navigation.navigate("ExcursionDescripcion", { service });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Menú lateral */}
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
          <FontAwesome5 name="bars" size={24} color="#fff" />
        </TouchableOpacity>
        {menuVisible && (
          <View style={styles.menu}>
            <TouchableOpacity onPress={() => navigation.navigate("Principal")}>
              <Text style={styles.menuItem}>Inicio</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("SobreNosotros")}>
              <Text style={styles.menuItem}>Sobre Nosotros</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Servicios")}>
              <Text style={styles.menuItem}>Servicios</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("ReservationForm")}>
              <Text style={styles.menuItem}>Formulario</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("ContactForm")}>
              <Text style={styles.menuItem}>Contacto</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Slider */}
      <View style={styles.sliderContainer}>
        <FlatList
          data={sliderData}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          onScroll={handleScroll}
          contentOffset={{ x: width * currentIndex, y: 0 }}
          renderItem={({ item }) => (
            <View style={styles.slide}>
              <Image source={item.image} style={styles.sliderImage} />
              <Text style={styles.sliderText}>{item.text}</Text>
            </View>
          )}
        />
      </View>

      {/* Sobre Nosotros */}
      <View style={styles.aboutUsContainer}>
        <Text style={styles.header}>Sobre Nosotros</Text>
        <Text style={styles.aboutUsText}>
          Somos una agencia de turismo comprometida con ofrecerte experiencias únicas
          y personalizadas en Colombia. Nuestra misión es ayudarte a descubrir los
          destinos más hermosos y ofrecerte el mejor servicio.
        </Text>
      </View>

      {/* Servicios */}
      <View style={styles.servicesContainer}>
        <Text style={styles.header}>Nuestros Servicios</Text>
        <FlatList
          data={services}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.serviceCard} onPress={() => handleServiceClick(item)}>
              <FontAwesome5 name={item.icon} size={40} color="#007BFF" />
              <Text style={styles.serviceTitle}>{item.title}</Text>
              <Text style={styles.serviceDescription}>{item.description}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.title}
        />
      </View>

      {/* Testimonios */}
      <View style={styles.testimonialsContainer}>
        <Text style={styles.header}>Lo que dicen nuestros clientes</Text>
        <FlatList
          data={testimonials}
          horizontal
          renderItem={({ item }) => (
            <View style={styles.testimonialCard}>
              <Image source={item.image} style={styles.testimonialImage} />
              <Text style={styles.testimonialName}>{item.name}</Text>
              <Text style={styles.testimonialReview}>{item.review}</Text>
            </View>
          )}
          keyExtractor={(item) => item.name}
        />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 SGIR Movil - Todos los derechos reservados</Text>
      </View>
    </ScrollView>
  );
};

export default Principal;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
  menuContainer: {
    position: "absolute",
    top: 40,
    left: 10,
    zIndex: 1000,
  },
  menu: {
    backgroundColor: "#fff",
    width: 200,
    padding: 10,
    position: "absolute",
    top: 40,
    left: 0,
    zIndex: 10,
    borderRadius: 5,
    elevation: 5,
  },
  menuItem: {
    fontSize: 18,
    padding: 10,
    textAlign: "left",
    color: "#333",
  },
  sliderContainer: {
    width,
    height: 250,
    marginBottom: 20,
  },
  slide: {
    width,
    alignItems: "center",
    justifyContent: "center",
  },
  sliderImage: {
    width,
    height: "100%",
    borderRadius: 10,
  },
  sliderText: {
    position: "absolute",
    bottom: 20,
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    opacity: 0.8,
  },
  aboutUsContainer: {
    marginTop: 30,
    width: "100%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  aboutUsText: {
    fontSize: 16,
    color: "#555",
    marginTop: 10,
    lineHeight: 24,
  },
  servicesContainer: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  serviceCard: {
    width: 120,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
    margin: 10,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  serviceDescription: {
    fontSize: 14,
    textAlign: "center",
    color: "#777",
    marginTop: 5,
  },
  testimonialsContainer: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  testimonialCard: {
    width: 220,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 5,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  testimonialImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  testimonialName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  testimonialReview: {
    fontSize: 14,
    textAlign: "center",
    color: "#777",
    marginTop: 5,
  },
  footer: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
    marginTop: 30,
  },
  footerText: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
});
