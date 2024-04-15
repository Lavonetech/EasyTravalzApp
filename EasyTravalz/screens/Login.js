import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native"; // Add import statement for TouchableOpacity
import { Feather } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements"; // Import CheckBox from react-native-elements
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import {
  JosefinSans_400Regular,
  JosefinSans_700Bold,
} from "@expo-google-fonts/josefin-sans";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [rememberMe, setRememberMe] = useState(false); // Add state for Remember Me checkbox

  const handleLogin = () => {
    console.log(
      `Attempting to log in with username: ${username} and password: ${password}`
    );
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

  const validateEmail = (input) => {
    // Regular expression to validate email format
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
    setIsValidEmail(isValid);
    setUsername(input);
  };

  let [fontsLoaded] = useFonts({
    RobotoRegular: Roboto_400Regular,
    RobotoMedium: Roboto_700Bold,
    JosefinSans_400Regular,
    JosefinSans_700Bold,
  });

  if (!fontsLoaded) {
    return null; // Loading indicator while fonts are loading
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome </Text>
      <Text style={styles.welcomeText}>back!</Text>
      <Text style={styles.title}>Sign In</Text>

      <View
        style={[
          styles.inputContainer,
          { borderColor: isValidEmail ? "green" : "#ccc" },
        ]}
      >
        <TextInput
          style={styles.input}
          placeholder="Username or Email"
          value={username}
          onChangeText={validateEmail}
          autoCapitalize="none"
        />
        {isValidEmail && (
          <Feather
            name="check-circle"
            size={24}
            color="green"
            style={styles.icongmail}
          />
        )}
      </View>

      <View style={styles.passwordInputContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.eyeIcon}
        >
          <Feather
            name={isPasswordVisible ? "eye-off" : "eye"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.rowContainer}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            title="Remember me"
            checked={rememberMe}
            onPress={() => setRememberMe(!rememberMe)}
            containerStyle={styles.checkbox}
            // textStyle={styles.checkboxTitle}
            titleProps={{
              style: {
                fontFamily: "RobotoRegular",
                color: "#000000",
                marginLeft: 5,
                fontSize: 15,
              },
            }}
          />
        </View>

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

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
        <View style={styles.iconContainer}>
          <Image
            source={require("../assets/icons/fb.png")}
            style={styles.icon}
          />
          <Image
            source={require("../assets/icons/t.png")}
            style={styles.icon}
          />
          <Image
            source={require("../assets/icons/g.png")}
            style={styles.icon}
          />
        </View>
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
    fontFamily: "JosefinSans_700Bold",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    marginTop: 20,
    fontFamily: "RobotoMedium",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 40,
    fontFamily: "RobotoRegular",
  },
  icon: {
    marginLeft: 10,
  },

  icongmail: {
    width: 24,
    height: 24,
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
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  checkbox: {
    backgroundColor: "transparent",
    borderWidth: 0,
    paddingHorizontal: 0,
  },
  // checkboxTitle: {
  //   fontSize: 16,
  //   fontFamily: 'RobotoRegular', // Apply your font family here
  //   color: '#C70000', // Customize color as needed
  //   marginLeft: 10, // Adjust spacing between checkbox and title
  // },
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
    fontFamily: "RobotoMedium",
  },
  registerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 80,
    height: 80,
    marginHorizontal: 2,
  },
});

export default Login;
