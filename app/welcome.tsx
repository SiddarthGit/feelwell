import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";

const Welcome = () => {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../assets/images/welcome_bg.gif")}
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Quote Card */}
        <View style={styles.quoteCard}>
          <Text style={styles.quoteText}>❝</Text>
          <Text style={styles.quote}>
            Even the darkest clouds eventually give way to the brightest skies.
          </Text>
          <Text style={styles.quoteText}>❞</Text>
        </View>

        {/* Bottom Navigation Bar */}
        <View style={styles.bottomNavContainer}>
          <View style={styles.line} />
          <View style={styles.bottomNav}>
            {/* Pie Chart - Depth Page */}
            <TouchableOpacity
              style={styles.navItem}
              onPress={() => router.push("/depth")}
            >
              <Icon name="pie-chart" size={28} color="#ddd" />
              <Text style={styles.navText}>Depth</Text>
            </TouchableOpacity>
            {/* Home - Welcome Page */}
            <TouchableOpacity
              style={styles.navItem}
              onPress={() => router.push("/welcome")}
            >
              <Icon name="home" size={28} color="#fff" />
              <Text style={styles.navText}>Home</Text>
            </TouchableOpacity>
            {/* Profile Page */}
            <TouchableOpacity
              style={styles.navItem}
              onPress={() => router.push("/profile")}
            >
              <Icon name="user" size={28} color="#ddd" />
              <Text style={styles.navText}>Profile</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.line} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.55)", 
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 30,  
  },
  quoteCard: {
    width: "90%",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 25,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 50,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  quoteText: {
    fontSize: 50,
    color: "rgba(255, 255, 255, 0.5)",
  },
  quote: {
    fontSize: 18,
    color: "rgba(255, 255, 255, 0.7)",
    fontStyle: "italic",
    textAlign: "center",
    lineHeight: 24,
    margin: 10,
  },
  bottomNavContainer: {
    width: "100%",
    position: "absolute",
    bottom: "5%",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingVertical: 15,
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    borderRadius: 15,
    paddingHorizontal: 20,
  },
  navItem: {
    alignItems: "center",
    opacity: 0.7,
  },
  navText: {
    fontSize: 12,
    color: "#bbb",
    marginTop: 3,
  },
  line: {
    width: "100%",
    height: 0.3,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
});

export default Welcome;