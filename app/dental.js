import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";

export default function Dental() {
  const menuItems = [
    // "Anatomy",
    "Hygiene and whitening",
    "Therapy",
    "Prosthetics",
    "Implantation",
    "Orthodontics",
    "Periodontology",
    "Surgery",
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Full Header with Logo */}
      <View style={styles.header}>
        <Image
          source={require("../assets/tooth1.jpg")}
          style={styles.logo}
        />
      </View>

      {/* Menu Items */}
      <View style={styles.menu}>
        {menuItems.map((item, index) => (
          <Link
            href={
              item === "Anatomy"
                ? "/anatomy"
                : item === "Hygiene and whitening"
                ? "/hygiene"
                : item === "Therapy"
                ? "/therapy"
                : item === "Prosthetics"
                ? "/prosthetics"
                : item === "Implantation"
                ? "/implantation"
                : item === "Orthodontics"
                ? "/orthodontics"
                : item === "Periodontology"
                ? "/periodontology"
                : item === "Surgery"
                ? "/surgery"
                : "#"
            }
            key={index}
            asChild
          >
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>{item}</Text>
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5" },
  header: {
    width: "100%", // Full screen width
    height: 150, // Set height for the header
    backgroundColor: "#007ACC", // Fallback background color
  },
  logo: {
    width: "100%", // Make the logo fill the entire width of the header
    height: "100%", // Make the logo fill the entire height of the header
    resizeMode: "cover", // Ensure the image covers the header area
  },
  menuItem: { padding: 20, borderBottomWidth: 1, borderBottomColor: "#80bcce" ,marginLeft:25},
  menuText: { fontSize: 18, color: "#003366",    fontWeight: "500",
  },
});
