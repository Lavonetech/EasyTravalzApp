import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import {
  JosefinSans_400Regular,
  JosefinSans_700Bold,
} from "@expo-google-fonts/josefin-sans";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  let [fontsLoaded] = useFonts({
    RobotoRegular: Roboto_400Regular,
    RobotoMedium: Roboto_700Bold,
    JosefinSans_400Regular,
    JosefinSans_700Bold,
  });

  if (!fontsLoaded) {
    return null; // Loading indicator while fonts are loading
  }

  const handleSignUp = () => {
    console.log("Signing up with:", name, email, password, confirmPassword);
  };

  const handleSignIn = () => {
    console.log("Sign in clicked");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <SafeAreaView style={styles.headerContainer}>
          <Text style={styles.header}>Sign up!</Text>
        </SafeAreaView>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Your Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter an email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <Feather name="eye" size={24} color="gray" />
              ) : (
                <Feather name="eye-off" size={24} color="gray" />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Confirm your Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <Feather name="eye" size={24} color="gray" />
              ) : (
                <Feather name="eye-off" size={24} color="gray" />
              )}
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSignIn}>
            <Text style={styles.signInText}>
              Already have an account?{" "}
              <Text style={styles.signInLink}>Sign in.</Text>
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.socialContainer}>
          <Text style={styles.orText}>Or use:</Text>
          <Image
            source={require("../assets/icons/fb.png")}
            style={styles.socialIcon}
          />
          <Image
            source={require("../assets/icons/t.png")}
            style={styles.socialIcon}
          />
          <Image
            source={require("../assets/icons/g.png")}
            style={styles.socialIcon}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  headerContainer: {
    alignSelf: "stretch",
  },
  header: {
    fontSize: 50,
    fontFamily: "JosefinSans_700Bold",
    marginBottom: 20,
    marginTop: 20,
    alignSelf: "flex-start",
  },
  formContainer: {
    width: "100%",
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontFamily: "RobotoRegular",
  },
  passwordContainer: {
    position: "relative",
    marginBottom: 10,
  },
  passwordInput: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    fontFamily: "RobotoRegular",
  },
  eyeIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  signUpButton: {
    backgroundColor: "#2194FF",
    borderRadius: 5,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  signUpButtonText: {
    color: "#fff",
    fontFamily: "RobotoMedium",
    fontSize: 16,
  },
  signInText: {
    marginTop: 20,
    alignSelf: "flex-start",
    color: "grey",
    fontFamily: "RobotoRegular",
    fontSize: 17,
  },
  signInLink: {
    color: "#28C59F",
  },
  socialContainer: {
    flexDirection: "row",
    marginTop: 50,
    alignItems: "center",
    alignSelf: "flex-start",
  },
  orText: {
    marginRight: 10,
    fontSize: 16,
    color: "grey",
    fontFamily: "RobotoRegular",
  },
  socialIcon: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
});

export default Register;
