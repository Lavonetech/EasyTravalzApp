import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { JosefinSans_400Regular, JosefinSans_700Bold } from "@expo-google-fonts/josefin-sans";

import axios from "axios";
import jwt_decode from 'jwt-decode';
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  
  const  navigation=useNavigation()
  
  const handleForgotPassword = () => {
    console.log("Forgot Password clicked");
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleRegisterNow = () => {
    navigation.navigate('Register');
  };

  const emailHandler = (text) => {
    setEmail(text);
  };

  const handlePassword = (text) => {
    setPassword(text);
  };

  let [fontsLoaded] = useFonts({
    RobotoRegular: Roboto_400Regular,
    RobotoMedium: Roboto_700Bold,
    JosefinSans_400Regular,
    JosefinSans_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleLogin = async () => {
    try {
      const user = {
        email,
        password
      };
      const response = await axios.post("http://192.168.56.1:5005/loginuser", user);
      if (response.status === 200) {
    
       console.log(response.data);
       const userName=response.data.data.userName
        const token = response.data.token;
        console.log(token)
        // const decodedToken = Jwtdecode(token);
        // console.log(decodedToJwtdecodeken);
        // You cannot use document.cookie in React Native, so remove this line
        setSuccessMessage("Loading...");
        setTimeout(() => {
          setSuccessMessage("");
          navigation.navigate('BottomTabNavigator',{userName });
        }, 3000);
      } else {
        console.log("User not found");
        setErrorMessage("Invalid email or password. Try again.");
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      }
    } catch (error) {
      console.log("Some error...!", error);
      setErrorMessage("Invalid email or password. Please try again.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {successMessage && <Text style={styles.success}>{successMessage}</Text>}
        {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.welcomeText}>back!</Text>
        <Text style={styles.title}>Sign In</Text>
        <View style={[styles.inputContainer, { borderColor: isValidEmail ? "green" : "#ccc" }]}>
          <TextInput
            style={styles.input}
            placeholder="Username or Email"
            value={email}
            onChangeText={emailHandler}
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
            onChangeText={handlePassword}
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
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
  success: {
    marginTop: 20,
    alignItems: 'center',
    color: '#2194FF'
  },
  error: {
    marginTop: 20,
    alignItems: 'center',
    color: '#dc3545'
  }
});

export default Login;
