import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  Linking,  // Import Linking
} from "react-native";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";

const AboutUs = () => {
  const router = useRouter();

  // Function to handle social media links
  const openURL = (url : any) => {
    Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
  };

  return (
    <ImageBackground
      source={require("../assets/images/relaxed.gif")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>

        {/* Team Info */}
        <Text style={styles.heading}>Our Team</Text>
        <View style={styles.line} />

        <View style={styles.teamContainer}>
          {/* Team Member 1 - Priyansh Sahu */}
          <View style={styles.teamMember}>
            <Image source={require("../assets/images/priyansh.jpg")} style={styles.teamPhoto} />
            <View style={styles.memberInfo}>
              <Text style={styles.teamText}>
                <Text style={styles.bold}>Scrum Master:</Text> Priyansh Sahu
              </Text>
              <Text style={styles.description}>
                Leads the team, ensuring smooth workflow and coordination.
              </Text>
              <View style={styles.linkRow}>
                <TouchableOpacity onPress={() => openURL("https://www.linkedin.com/in/priyansh-sahu-791a2a251/")}>
                  <Icon name="linkedin" size={24} color="#0A66C2" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openURL("https://github.com/PriyanshSahu65")}>
                  <Icon name="github" size={24} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Team Member 2 - Sarthak Sisodia */}
          <View style={styles.teamMember}>
            <Image source={require("../assets/images/sarthak.jpg")} style={styles.teamPhoto} />
            <View style={styles.memberInfo}>
              <Text style={styles.teamText}>
                <Text style={styles.bold}>Product Owner:</Text> Sarthak Sisodia
              </Text>
              <Text style={styles.description}>
                Manages project vision, requirements, and feature priorities.
              </Text>
              <View style={styles.linkRow}>
                <TouchableOpacity onPress={() => openURL("https://www.linkedin.com/in/sarthak-sisodia-13b5ab272/")}>
                  <Icon name="linkedin" size={24} color="#0A66C2" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openURL("https://github.com/IamSarTech")}>
                  <Icon name="github" size={24} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Team Member 3 - Siddharth Nair */}
          <View style={styles.teamMember}>
            <Image source={require("../assets/images/siddharth.jpg")} style={styles.teamPhoto} />
            <View style={styles.memberInfo}>
              <Text style={styles.teamText}>
                <Text style={styles.bold}>Developer:</Text> Siddharth Nair
              </Text>
              <Text style={styles.description}>
                Specializes in coding, debugging, and implementing features.
              </Text>
              <View style={styles.linkRow}>
                <TouchableOpacity onPress={() => openURL("https://www.linkedin.com/in/siddharth-nair")}>
                  <Icon name="linkedin" size={24} color="#0A66C2" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openURL("https://github.com/siddharthnair")}>
                  <Icon name="github" size={24} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Bottom Navigation Bar */}
        <View style={styles.bottomNavContainer}>
          <View style={styles.line1} />
          <View style={styles.bottomNav}>
            <TouchableOpacity
              style={styles.navItem}
              onPress={() => router.push("/depth")}
            >
              <Icon name="pie-chart" size={28} color="#ddd" />
              <Text style={styles.navText}>Depth</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.navItem, styles.activeNavItem]}
              onPress={() => router.push("/welcome")}
            >
              <Icon name="home" size={28} color="#fff" />
              <Text style={[styles.navText, styles.activeNavText]}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.navItem}
              onPress={() => router.push("/profile")}
            >
              <Icon name="user" size={28} color="#ddd" />
              <Text style={styles.navText}>Profile</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.line1} />
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
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    alignItems: "center",
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: 65,
    left: 25,
    zIndex: 10,
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 50,
  },
  teamContainer: {
    width: "90%",
    marginTop: 20,
  },
  teamMember: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  teamPhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
  },
  memberInfo: {
    marginLeft: 15,
    flex: 1,
  },
  teamText: {
    fontSize: 16,
    color: "#fff",
  },
  description: {
    fontSize: 14,
    color: "#ccc",
    marginTop: 2,
  },
  bold: {
    fontWeight: "bold",
  },
  linkRow: {
    flexDirection: "row",
    marginTop: 5,
    gap: 10,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 5,
  },
  line: {
    width: "90%",
    height: 2,
    backgroundColor: "#000",
    marginVertical: 10,
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
    backgroundColor: "rgba(0, 0, 0, 0)",
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
  line1: {
    width: "100%",
    height: 0.3,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
});

export default AboutUs;