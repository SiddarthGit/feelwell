import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (email === "user" && password === "pass") {
      console.log("Login successful");
      router.push("/welcome");
    } else {
      console.log("Invalid username or password");
      alert("Invalid Credentials! Try again.");
    }
  };

  return (
    <ImageBackground
      source={require("../assets/images/index_bg.gif")} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.divider} />
          <Text style={styles.title}>FELLWELL</Text>
          <View style={styles.divider} />
        </View>

        {/* Login Form */}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email/Username"
            placeholderTextColor="#ddd"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#ddd"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          {/* Social Logins */}
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="google" size={20} color="white" />
            <Text style={styles.socialButtonText}> Login/Signin with Google</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.subtitle}>" Mental Health & Wellness! "</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
    backgroundColor: "rgba(0, 0, 0, 0.67)", 
  },
  header: {
    marginTop: 100,
    alignItems: "center",
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    fontFamily: "Impact",
    color: "rgba(255, 255, 255, 0.7)",
    letterSpacing: 1,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginVertical: 8,
  },
  form: {
    alignItems: "center",
  },
  input: {
    width: "90%",
    height: 50,
    borderColor: "rgba(255, 255, 255, 0.5)",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.8)",
    marginBottom: 18,
    backgroundColor: "rgba(255, 255, 255, 0.11)", 
  },
  loginButton: {
    backgroundColor: "rgba(165, 108, 206, 0.68)",
    width: "60%",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 17,
    fontWeight: "bold",
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  socialButtonText: {
    fontSize: 13,
    color: "rgba(255, 255, 255, 0.8)",
    marginLeft: 3,
  },
  footer: {
    alignItems: "center",
    marginBottom: 70,
  },
  subtitle: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.9)",
    fontStyle: "italic",
  },
  
});
