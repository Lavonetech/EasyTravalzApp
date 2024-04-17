import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons'; // Import Feather from expo vector icons
import axios from 'axios';

const Register = ({navigation}) => {

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const userNameHandler = (text) => {
    setUserName(text);
  }

  const emailHandler = (text) => {
    setEmail(text);
  }

  const passwordHandler = (text) => {
    setPassword(text);
  }

  const mobileHandler = (text) => {
    setPhoneNumber(text);
  }

  const userRegister = async () => {
    try {
      const user = {
        userName,
        email,
        phoneNumber,
        password,
      };
  
      const response = await fetch('http://192.168.56.1:5005/createuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
  
      const responseData = await response.json();
  
      if (response.ok) {
        setSuccessMessage("You registered successfully. You will be redirected to the login page");
        setUserName("");
        setEmail("");
        setPhoneNumber("");
        setPassword("");
  
        setTimeout(() => {
          setSuccessMessage("")
          navigation.navigate('Login');
        }, 3000);
      } else {
        throw new Error(responseData.message || "An error occurred");
      }
    } catch (error) {
      console.log("Error:", error.message);
  
      if (error.response && error.response.status === 422 && error.response.data.error === "DuplicateEmail") {
        setErrorMessage("Email address already exists. Please try another email address");
  
        setTimeout(() => {
          setErrorMessage("")
        }, 4000)
      } else {
        setErrorMessage("An internal server error occurred. Please try again later.");
        setTimeout(() => {
          setErrorMessage("")
        }, 4000)
      }
    }
  };
  

  const handleLogin = () => {
    navigation.navigate('Login');
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
      {
  successMessage && <Text style={styles.success}>{successMessage}</Text>
}

{
  errorMessage && <Text style={styles.error}>{errorMessage}</Text>
}
        <SafeAreaView style={styles.headerContainer}>
          <Text style={styles.header}>Sign up!</Text>
        </SafeAreaView>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Your Name"
            value={userName}
            onChangeText={userNameHandler}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter an email"
            value={email}
            onChangeText={emailHandler}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            value={phoneNumber}
            onChangeText={mobileHandler}
          />
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter your password"
              value={password}
              onChangeText={passwordHandler}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <Feather name="eye" size={24} color="black" />
              ) : (
                <Feather name="eye-off" size={24} color="black" />
              )}
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity style={styles.signUpButton} onPress={userRegister}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>
          <Text style={styles.signInText}>Already have an account? <Text style={styles.signInLink} onPress={handleLogin}>Sign in.</Text></Text>
        </View>
        <View style={styles.socialContainer}>
          <Text style={styles.orText}>Or use:</Text>
          <Image  source={require("../assets/icons/fb.png")} style={styles.socialIcon} />
          <Image  source={require("../assets/icons/t.png")} style={styles.socialIcon} />
          <Image  source={require("../assets/icons/g.png")} style={styles.socialIcon} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  
  header: {
    fontSize: 50,
    marginBottom: 20,
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  formContainer: {
    width: '100%',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  passwordContainer: {
    position: 'relative',
    marginBottom: 10,
  },
  passwordInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  eyeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  signUpButton: {
    backgroundColor: '#2194FF',
    borderRadius: 5,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  signUpButtonText: {
    color: '#fff',
  },
  signInText: {
    marginTop: 20,
    alignSelf: 'flex-start',
    color: 'grey'
  },
  signInLink: {
    color: 'green',
  },
  socialContainer: {
    flexDirection: 'row',
    marginTop: 50,
    alignItems: 'center',
    alignSelf: 'flex-start'
  },
  orText: {
    marginRight: 10,
    fontSize: 16,
  },
  socialIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  success:{
    marginTop:20,
    alignItems:'center',
    color:'#2194FF'
  },
  error:{
    marginTop:20,
    alignItems:'center',
    color:'#dc3545'
  }
});

export default Register;
