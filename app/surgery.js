import React, { useState } from "react";
import { useRouter } from "expo-router"; // Import the router hook

import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";

export default function Surgery() {
  const router = useRouter();
  const items = [
    {
      title: "Normal tooth extraction",
      image: require("../assets/surgery/normal-tooth-extraction/Hero.png"),
      images: [
        require("../assets/surgery/normal-tooth-extraction/1.png"),
        require("../assets/surgery/normal-tooth-extraction/2.png"),
        require("../assets/surgery/normal-tooth-extraction/3.png"),
        require("../assets/surgery/normal-tooth-extraction/4.png"),
       
      ],
    },
    {
      title: "Hemisection",
      image: require("../assets/surgery/Hemisection/Hero01.png"),
      images: [
        require("../assets/surgery/Hemisection/1.png"),
        require("../assets/surgery/Hemisection/2.png"),
        require("../assets/surgery/Hemisection/3.png"),
        require("../assets/surgery/Hemisection/4.png"),
        require("../assets/surgery/Hemisection/5.png"),
        require("../assets/surgery/Hemisection/6.png"),
        require("../assets/surgery/Hemisection/7.png"),

      ],
    },
    {
      title: "Crestal sinus lift ",
      image: require("../assets/surgery/Crestal-sinus-lift/Hero02.png"),
      images: [
        require("../assets/surgery/Crestal-sinus-lift/01.png"),
        require("../assets/surgery/Crestal-sinus-lift/02.png"),
        require("../assets/surgery/Crestal-sinus-lift/03.png"),
        require("../assets/surgery/Crestal-sinus-lift/4.png"),
        require("../assets/surgery/Crestal-sinus-lift/05.png"),
        require("../assets/surgery/Crestal-sinus-lift/06.png"),
        require("../assets/surgery/Crestal-sinus-lift/07.png"),

      ],
    },
    {
      title: "Lateral sinus lift ",
      image: require("../assets/surgery/Lateral-sinus-lift/Hero03.png"),
      images: [
        require("../assets/surgery/Lateral-sinus-lift/01.png"),
        require("../assets/surgery/Lateral-sinus-lift/02.png"),
        require("../assets/surgery/Lateral-sinus-lift/03.png"),
        require("../assets/surgery/Lateral-sinus-lift/04.png"),
        require("../assets/surgery/Lateral-sinus-lift/05.png"),
        require("../assets/surgery/Lateral-sinus-lift/06.png"),
        require("../assets/surgery/Lateral-sinus-lift/07.png"),

      ],
    },
   
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);

  const openModal = (images) => {
    setModalVisible(true);
    setCurrentIndex(0); // Set initial index to the first image
    setCurrentImages(images || []); // Set the images for the modal
  };

  const navigateImage = (direction) => {
    if (direction === "up") {
      setCurrentIndex((prev) =>
        prev > 0 ? prev - 1 : currentImages.length - 1
      );
    } else if (direction === "down") {
      setCurrentIndex((prev) =>
        prev < currentImages.length - 1 ? prev + 1 : 0
      );
    }
  };

  const handleBackPress = () => {
    console.log("Back button pressed");

    // Check navigation stack history
    if (router.canGoBack()) {
      console.log("Navigating back");
      router.back();
    } else {
      console.log("Redirecting to home screen");
      router.replace("/"); // Replace with your home route
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Image
            source={require("../assets/back1.png")} // Replace with your back arrow image
            style={styles.backArrow}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Surgery</Text>
      </View>

      {/* Content Section */}
      <ScrollView>
        {items.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => openModal(item.images)}
            style={styles.card}
          >
            <Text style={styles.text}>{item.title}</Text>
            <Image source={item.image} style={styles.image} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Image Modal */}
      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          {/* Close Button */}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeText}>X</Text>
          </TouchableOpacity>

          {/* Display Selected Image */}
          <Image
            source={currentImages[currentIndex]}
            style={styles.modalImage}
          />

          {/* Navigation Arrows */}
          <TouchableOpacity
            style={styles.arrowUp}
            onPress={() => navigateImage("up")}
          >
            <Text style={styles.arrowText}>↑</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.arrowDown}
            onPress={() => navigateImage("down")}
          >
            <Text style={styles.arrowText}>↓</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5" },

  // Header styles
  header: {
    height: 60, // Ensure proper height
    justifyContent: "center", // Vertically center the title
    backgroundColor: "#2D6EAD",
    elevation: 5,
  },
  backButton: {
    position: "absolute", // Keep the back button on the left
    left: 10,
    top: "50%",
    marginTop: -12, // Adjust to vertically align
    zIndex: 10,
  },
  headerTitle: {
    fontSize: 25,
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center", // Center the text
  },
  backArrow: {
    width: 30,
    height: 30,
    tintColor: "#FFF",
  },

  // Card styles
  card: {
    backgroundColor: "#FFF",
    margin: 10,
    borderRadius: 8,
    padding: 10,
    elevation: 3,
  },
  text: { fontSize: 16, marginBottom: 5, color: "#333" },
  image: { width: "100%", height: 150, borderRadius: 8, resizeMode: "cover" },

  // Modal styles
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.9)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalImage: {
    width: 700, // or '100%'
    height: "70%",
    resizeMode: "contain",
    transform: [{ rotate: "90deg" }],
  },
  closeButton: { position: "absolute", top: 10, right: 20 },
  closeText: { color: "#FFF", fontSize: 24, fontWeight: "bold" },
  arrowUp: { position: "absolute", top: 0, alignSelf: "center" },
  arrowDown: { position: "absolute", bottom: 0, alignSelf: "center" },
  arrowText: { color: "#FFF", fontSize: 36, fontWeight: "bold" },
});
