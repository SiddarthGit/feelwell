import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Background GIFs
const darkBackground = require("../assets/images/welcome_bg.gif");
const lightBackground = require("../assets/images/welcome_light.gif");

// Create Context
const ThemeContext = createContext();

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
  const [selectedBackground, setSelectedBackground] = useState(darkBackground);

  // Load stored background preference
  useEffect(() => {
    const loadBackground = async () => {
      try {
        const storedBackground = await AsyncStorage.getItem("backgroundPreference");
        if (storedBackground === "light") {
          setSelectedBackground(lightBackground);
        } else {
          setSelectedBackground(darkBackground);
        }
      } catch (error) {
        console.error("Failed to load background preference:", error);
      }
    };
    loadBackground();
  }, []);

  // Change background and save preference
  const changeBackground = async () => {
    try {
      const newBackground = selectedBackground === darkBackground ? lightBackground : darkBackground;
      setSelectedBackground(newBackground);
      await AsyncStorage.setItem("backgroundPreference", newBackground === lightBackground ? "light" : "dark");
    } catch (error) {
      console.error("Failed to save background preference:", error);
    }
  };

  return (
    <ThemeContext.Provider value={{ selectedBackground, changeBackground }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook for Using Theme
export const useTheme = () => useContext(ThemeContext); // <-- This fixes the issue

export default ThemeContext;
