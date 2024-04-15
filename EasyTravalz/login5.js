import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { JosefinSans_400Regular, JosefinSans_700Bold } from '@expo-google-fonts/josefin-sans';




const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleLogin = () => {
    console.log(`Attempting to log in with username: ${username} and password: ${password}`);
    setUsername("");
    setPassword("");
  };

  const handleForgotPassword = () => {
    console.log("Forgot Password clicked");
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleRegisterNow = () => {
    console.log("Register now clicked");
  };

  let [fontsLoaded] = useFonts({
    RobotoRegular: Roboto_400Regular,
    RobotoMedium: Roboto_700Bold,
    JosefinSans_400Regular,
    JosefinSans_700Bold,
  });

  if (!fontsLoaded) {
    return null; // You can render a loading indicator here while fonts are loading
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome </Text>
      <Text style={styles.welcomeText}>back!</Text>
      <Text style={styles.title}>Sign In</Text>

      <TextInput
        style={styles.input}
        placeholder="Username or Email"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      <View style={styles.passwordInputContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
          <Feather name={isPasswordVisible ? "eye-off" : "eye"} size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.registerContainer}>
        <Text style={styles.noAccountText}>No account?</Text>
        <TouchableOpacity onPress={handleRegisterNow}>
          <Text style={styles.registerNowText}>Register now</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.registerContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>or continue with</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.socialButtonsContainer}>{/* Add social login buttons here */}</View>
    
    
      <View style={styles.iconContainer}>
        <Image
          source={require('../assets/icons/fb.png')} // Assuming icon1.png is in assets/icons
          style={styles.icon}
        />
        <Image
          source={require('../assets/icons/t.png')} // Assuming icon2.png is in assets/icons
          style={styles.icon}
        />
        <Image
          source={require('../assets/icons/g.png')} // Assuming icon3.png is in assets/icons
          style={styles.icon}
        />
      </View>
    
    
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  welcomeText: {
    fontSize: 60,
    marginTop: 0,
    marginBottom: 0,
    textAlign: "left",
    fontFamily: 'JosefinSans_700Bold', 
  },
  title: {
    fontSize: 24,
    // fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
    fontFamily: "RobotoMedium", 
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontFamily: "RobotoRegular", 
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    paddingRight: 30,
    fontFamily: "RobotoRegular", 
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
  },
  forgotPassword: {
    fontSize: 16,
    color: "#2194FF",
    textAlign: "right",
    marginTop: 10,
    marginBottom: 20,
    fontFamily: "RobotoRegular", 
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#2194FF",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    // fontWeight: "bold",
    fontFamily: "RobotoMedium", 
  },
  registerContainer: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
    marginTop: 10,
    marginBottom: 0,
  },
  noAccountText: {
    fontSize: 16,
    marginRight: 5,
    fontFamily: "RobotoRegular", 
  },
  registerNowText: {
    fontSize: 16,
    color: "#2194FF",
    fontFamily: "RobotoRegular", 
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
    marginHorizontal: 10,
  },
  orText: {
    fontSize: 16,
    color: "#555",
    marginHorizontal: 10,
    fontFamily: "RobotoRegular", 
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },



  iconContainer: {
    flexDirection: 'row', // Arrange icons horizontally
    justifyContent: 'center', // Center icons horizontally
    alignItems: 'center', // Center icons vertically
  },
  icon: {
    width: 80,
    height: 80,
    marginHorizontal: 2, // Adjust spacing between icons
  },



});

export default Login;
