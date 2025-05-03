import React from "react";
import { 
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity, 
    ImageBackground 
} from "react-native";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";

const UserInfo = () => {
  const router = useRouter();

  // Dummy User Data (Replace with API/Firebase data)
  const user = {
    name: "Sarthak Sisodia",
    email: "sarthaksisodia2004@gmail.com",
    age: 19,
    dob: "2005-08-30",
    contact: "+91 9027 737 500",
    address: "1158, Estancia Township, Potheri, Chennai",
  };

  const userDetails = [
    { icon: "user", label: "Name", value: user.name },
    { icon: "envelope", label: "Email", value: user.email },
    { icon: "calendar", label: "Age", value: user.age },
    { icon: "birthday-cake", label: "Date of Birth", value: user.dob },
    { icon: "phone", label: "Contact No", value: user.contact },
    { icon: "map-marker", label: "Address", value: user.address },
  ];

  return (
    <ImageBackground 
      source={require("../assets/images/kk.gif")} 
      style={styles.background}
    >
      <View style={styles.overlay}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.heading}>User Information</Text>
        
        <View style={styles.infoBox}>
          {userDetails.map((item, index) => (
            <View key={index} style={styles.infoRow}>
              <Icon name={item.icon} size={20} color="#5A67D8" style={styles.icon} />
              <View style={styles.textContainer}>
                <Text style={styles.label}>{item.label}:</Text>
                <Text style={styles.value}>{item.value}</Text>
              </View>
            </View>
          ))}
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
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)", 
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 90, // Space for bottom navigation
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
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginTop: 120,
  },
  /* Info Box */
  infoBox: {
    width: "90%",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.2)",
  },
  icon: {
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  value: {
    fontSize: 17,
    color: "#ddd",
    marginTop: 2,
  },
  /* Bottom Navigation Bar */
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

export default UserInfo;
