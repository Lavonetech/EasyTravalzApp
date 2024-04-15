import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons"; // Import Feather icons from Expo

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // State to track password visibility

  const handleLogin = () => {
    // Perform authentication logic here (e.g., API call, validation)
    console.log(
      `Attempting to log in with username: ${username} and password: ${password}`
    );

    // Reset fields after login attempt (for demonstration purposes)
    setUsername("");
    setPassword("");
  };

  const handleForgotPassword = () => {
    // Placeholder function for handling forgot password action
    console.log("Forgot Password clicked");
    // Implement navigation or other logic here to handle forgot password
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible); // Toggle password visibility state
  };

  const handleRegisterNow = () => {
    // Placeholder function for handling "Register now" action
    console.log("Register now clicked");
    // Implement navigation or other logic here to navigate to the registration screen
  };

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
          secureTextEntry={!isPasswordVisible} // Toggle secureTextEntry based on visibility state
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

      <View style={styles.socialButtonsContainer}>
        {/* Add social login buttons here */}
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 50, // Adjust as needed for spacing
  },
  welcomeText: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 0,
    textAlign: "left", // Align text to the left
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
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
    paddingRight: 30, // Adjust to leave space for the eye icon
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
  },
  forgotPassword: {
    fontSize: 16,
    color: "#00A2FF",
    textAlign: "right",
    marginTop: 10,
    marginBottom: 20,
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "blue",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  registerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  
  noAccountText: {
    fontSize: 16,
    marginRight: 5,
  },
  registerNowText: {
    fontSize: 16,
    color: "#00A2FF",
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
  },
});

export default Login;
