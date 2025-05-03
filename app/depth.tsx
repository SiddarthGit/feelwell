//In depth suimport React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { PieChart } from "react-native-chart-kit";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";

const screenWidth = Dimensions.get("window").width;

const Depth: React.FC = () => {
  const router = useRouter();

  // Sample mood data for the pie chart
  const moodData = [
    {
      name: "Happy",
      population: 45,
      color: "#E91E63",
      legendFontColor: "#FFF",
      legendFontSize: 14,
    },
    {
      name: "Sad",
      population: 30,
      color: "#9C27B0",
      legendFontColor: "#FFF",
      legendFontSize: 14,
    },
    {
      name: "Anger",
      population: 25,
      color: "#FF6347",
      legendFontColor: "#FFF",
      legendFontSize: 14,
    },
  ];

  // Number of snapshots taken throughout the day
  const snapshotCount: number = 4;

  return (
    <ImageBackground
      source={require("../assets/images/cherry.gif")}
      style={styles.background}
    >
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Icon name="arrow-left" size={24} color="#fff" />
      </TouchableOpacity>
      <View style={styles.container}>
        {/* Pie Chart */}
        <Text style={styles.heading}>Mood Analysis</Text>
        <View style={styles.formContainer}>
        <PieChart
          data={moodData}
          width={screenWidth - 30}
          height={250}
          chartConfig={{
            backgroundGradientFrom: "#000",
            backgroundGradientTo: "#000",
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />

        {/* Daily Average */}
        <Text style={styles.dailyAverage}>
          Daily Mood Average:{" "}
          <Text style={{ color: "#FFD700", fontWeight: "bold" }}>Happy</Text>
        </Text>

        {/* Snapshots Count */}
        <Text style={styles.heading1}>Snapshots Taken Today: {snapshotCount}</Text>
          </View>
        {/* Bottom Navigation Bar */}
        <View style={styles.bottomNavContainer}>
          <View style={styles.line} />
          <View style={styles.bottomNav}>
            <TouchableOpacity
              style={styles.navItem}
              onPress={() => router.push("/depth")}
            >
              <Icon name="pie-chart" size={28} color="#fff" />
              <Text style={styles.navText}>Depth</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.navItem]}
              onPress={() => router.push("/welcome")}
            >
              <Icon name="home" size={28} color="#ddd" />
              <Text style={[styles.navText]}>Home</Text>
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

// Styles
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 0,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFF",
    marginVertical: 30,
    
  },
  heading1: {
      fontSize: 22,
      fontWeight: "bold",
      color: "#FFF",
      marginVertical: 10,
      paddingLeft: 20
    },
  dailyAverage: {
    fontSize: 16,
    color: "#FFF",
    marginBottom: 20,
    textAlign: "center",
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
  activeNavItem: {
    opacity: 1,
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
  backButton: {
      position: "absolute",
      top: 80,
      left: 25,
      zIndex: 10,
      padding: 10,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      borderRadius: 50,
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
});

export default Depth;