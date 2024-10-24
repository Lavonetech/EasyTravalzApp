import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useNavigation } from "@react-navigation/native";

const Main = () => {

    const navigation=useNavigation()
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null; // Render nothing until fonts are loaded
  }

  const handleRegister= () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={require("../assets/main/background.png")}
        style={styles.backgroundImage}
      />

      {/* Content Overlay */}
      <View style={styles.overlay}>
        {/* Logo and Title at the top */}
        <View style={styles.logoContainer}>
          {/* Images wrapped in a View with white background */}
          <View style={styles.logoBox}>
            <Image
              source={require("../assets/main/mainLogo.png")}
              style={styles.logoImage}
            />
            <Image
              source={require("../assets/main/EasyTravelz.png")}
              style={styles.titleImage}
            />
          </View>
        </View>

        {/* Spacer to push button to bottom */}
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          {/* Description */}
          <View style={styles.descriptionContainer}>
            <Text style={styles.bigText}>Let’s explore</Text>
            <Text style={styles.bigText}>the world with us</Text>
            <Text style={styles.smallText}>
              World's largest digital traveling supporter
            </Text>
          </View>
          {/* Get Started Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={handleRegister}
          >
            <Text style={styles.buttonText}>Get Started Now</Text>
            <Image
              source={require("../assets/main/arrow.png")}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    width: "100%",
    padding: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  logoBox: {
    marginTop: 50,
    width: 200,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    padding: 5,
    borderRadius: 30,
  },
  logoImage: {
    width: 30,
    height: 40,
    borderRadius: 10,
  },
  titleImage: {
    width: 100,
    height: 20,
    resizeMode: "contain",
    marginLeft: 10,
  },
  descriptionContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  bigText: {
    fontSize: 44,
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 0,
    fontFamily: "Roboto_700Bold", // Apply Roboto Bold
  },
  smallText: {
    fontSize: 18,
    color: "#ffffff",
    textAlign: "center",
    fontFamily: "Roboto_400Regular", // Apply Roboto Regular
  },
  button: {
    width: 350,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2194FF",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    color: "#FFFFFF",
    fontFamily: "Roboto_700Bold", // Apply Roboto Bold
  },
  arrowIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginLeft: 10,
  },
});

export default Main;