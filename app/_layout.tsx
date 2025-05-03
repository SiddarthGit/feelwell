import React from "react";
import { ThemeProvider } from "./ThemeContext"; // Import ThemeProvider
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <ThemeProvider>
      
    <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
}

