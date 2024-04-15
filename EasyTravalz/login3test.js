// App.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

export default function App() {
  let [fontsLoaded] = useFonts({
    JoI: require("../assets/fonts/static/JosefinSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.welcomeText]}>Welcome</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 40,
    fontFamily: "JoI",
    fontWeight: "bold",
  },
});
