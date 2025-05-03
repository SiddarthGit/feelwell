import React, { useState } from "react";
import { 
    View,
    Text, 
    TouchableOpacity, 
    StyleSheet, 
    ImageBackground, 
    Image 
} from "react-native";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";

const Profile = () => {
  const router = useRouter();

  // Theme state: true = dark, false = light
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  // Background GIFs
  const darkBackground = require("../assets/images/spare_bg.gif");
  const lightBackground = require("../assets/images/cherry.gif");

  // Toggle theme function
  const toggleTheme = () => setIsDarkTheme((prev) => !prev);

  const handleLogout = () => {
    console.log("User Logged Out");
    router.replace("/"); // Redirect to login/home screen
  };

  return (
    <ImageBackground 
      source={isDarkTheme ? darkBackground : lightBackground} 
      style={styles.background}
    >
      <View style={styles.container}>


        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image 
            source={require("../assets/images/user2.jpg")} 
            style={styles.userImage} 
          />
          <View style={styles.userDetails}>
            <Text style={styles.username}>Username</Text>
            <Text style={styles.email}>username@gmail.com</Text>
          </View>
        </View>

        {/* Options Section */}
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.option} onPress={() => router.push("/userinfo")}>
            <Text style={styles.optionText}>User Information</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={() => router.push("/feedback")}>
            <Text style={styles.optionText}>Feedback</Text>
          </TouchableOpacity>

          {/* Theme Toggle */}
          <TouchableOpacity style={styles.option} onPress={toggleTheme}>
            <Text style={styles.optionText}>Appearance: {isDarkTheme ? "Dark" : "Light"}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={() => router.push("/aboutus")}>
            <Text style={styles.optionText}>About Us</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Switch Account</Text>
          </TouchableOpacity>
        </View>

        {/* Log Out Button */}
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.option} onPress={handleLogout}>
            <Text style={styles.optionText}>Log Out</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Navigation Bar */}
        <View style={styles.bottomNavContainer}>
          <View style={styles.line} />
          <View style={styles.bottomNav}>
            <TouchableOpacity
              style={styles.navItem}
              onPress={() => router.push("/depth")}
            >
              <Icon name="pie-chart" size={28} color="#ddd" />
              <Text style={styles.navText}>Depth</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.navItem}
              onPress={() => router.push("/welcome")}
            >
              <Icon name="home" size={28} color="#fff" />
              <Text style={styles.navText}>Home</Text>
            </TouchableOpacity>
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
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    padding: 10,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 100,
    marginBottom: 40,
    width: "90%",
    justifyContent: "space-between",
  },
  userImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: "#fff",
    marginLeft: 20
  },
  userDetails: {
    alignItems: "flex-end",
  },
  username: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginRight: 85
  },
  email: {
    fontSize: 20,
    color: "#ddd",
    marginRight: 30
  },
  optionsContainer: {
    width: "90%",
  },
  option: {
    backgroundColor: "rgba(132, 108, 216, 0.37)",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 25,
    //alignItems: "center",
  },
  optionText: {
    fontSize: 20,
    color: "#fff",
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
  line: {
    width: "100%",
    height: 0.3,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
});

export default Profile;