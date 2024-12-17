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

export default function Hygiene() {
  const router = useRouter(); 
  const items = [
    {
      title: "Brushing teeth with the toothbrush ",
      image: require("../assets/hygeine-and-whitening/Brushing-teeth-with-the-toothbrush/Hero.png"),
      images: [
        require("../assets/hygeine-and-whitening/Brushing-teeth-with-the-toothbrush/01.png"),
        require("../assets/hygeine-and-whitening/Brushing-teeth-with-the-toothbrush/02.png"),
        require("../assets/hygeine-and-whitening/Brushing-teeth-with-the-toothbrush/03.png"),
        require("../assets/hygeine-and-whitening/Brushing-teeth-with-the-toothbrush/04.png"),
      ],
    },
    {
      title: "Cleaning with interdental floss",
      image: require("../assets/hygeine-and-whitening/Cleaning-with-interdental-floss/Hero.png"),
      images: [
        require("../assets/hygeine-and-whitening/Cleaning-with-interdental-floss/01.png"),
        require("../assets/hygeine-and-whitening/Cleaning-with-interdental-floss/02.png"),
        require("../assets/hygeine-and-whitening/Cleaning-with-interdental-floss/03.png"),
        require("../assets/hygeine-and-whitening/Cleaning-with-interdental-floss/04.png"),
        require("../assets/hygeine-and-whitening/Cleaning-with-interdental-floss/05.png"),
      ],
    },
    {
      title: "Cleaning with an interdental brush ",
      image: require("../assets/hygeine-and-whitening/Cleaning-with-an-interdental-brush/Hero.png"),
      images: [
        require("../assets/hygeine-and-whitening/Cleaning-with-an-interdental-brush/01.png"),
        require("../assets/hygeine-and-whitening/Cleaning-with-an-interdental-brush/02.png"),
        require("../assets/hygeine-and-whitening/Cleaning-with-an-interdental-brush/03.png"),
        require("../assets/hygeine-and-whitening/Cleaning-with-an-interdental-brush/04.png"),
        require("../assets/hygeine-and-whitening/Cleaning-with-an-interdental-brush/05.png"),
        require("../assets/hygeine-and-whitening/Cleaning-with-an-interdental-brush/06.png"),

      ],
    },
    {
      title: "Plaque on the teeth, stone formation",
      image: require("../assets/hygeine-and-whitening/Plaque-on-the-teeth/Hero.png"),
      images: [
        require("../assets/hygeine-and-whitening/Plaque-on-the-teeth/01.png"),
        require("../assets/hygeine-and-whitening/Plaque-on-the-teeth/02.png"),
        require("../assets/hygeine-and-whitening/Plaque-on-the-teeth/03.png"),

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
        <Text style={styles.headerTitle}>Hygiene and whitening</Text>
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
    zIndex: 10
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
