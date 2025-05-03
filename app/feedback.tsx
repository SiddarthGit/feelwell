import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";

const Feedback = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = () => {
    const { firstName, lastName, email, message } = form;

    if (!firstName || !lastName || !email || !message) {
      Alert.alert("Error", "Please fill out all fields.");
      return;
    }

    console.log("Feedback Submitted:", form);
    Alert.alert("Success", "Feedback submitted successfully!");

    setForm({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <ImageBackground
      source={require("../assets/images/spare_bg.gif")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.heading}>Feedback</Text>
        <Text style={styles.subhead}>Your personalized Review :)</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor="#ddd"
            value={form.firstName}
            onChangeText={(text) => setForm({ ...form, firstName: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="#ddd"
            value={form.lastName}
            onChangeText={(text) => setForm({ ...form, lastName: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#ddd"
            keyboardType="email-address"
            value={form.email}
            onChangeText={(text) => setForm({ ...form, email: text })}
          />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Enter your message..."
            placeholderTextColor="#ddd"
            multiline
            numberOfLines={4}
            value={form.message}
            onChangeText={(text) => setForm({ ...form, message: text })}
          />

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit Feedback</Text>
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
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 90,
  },
  backButton: {
    position: "absolute",
    top: 80,
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
    marginTop: 80,
    textTransform: "uppercase",
    letterSpacing: 1.5,
  },
  formContainer: {
    width: "90%",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    color: "#fff",
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "#5A67D8",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: "bold",
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
  line: {
    width: "100%",
    height: 0.3,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  subhead: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 20,
  }
});

export default Feedback;
