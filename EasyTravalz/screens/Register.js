import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons'; // Import Feather from expo vector icons



const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  

  const handleSignUp = () => {
    
    console.log('Signing up with:', name, email, password, confirmPassword);
    
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
            <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <Feather name="eye" size={24} color="black" />
              ) : (
                <Feather name="eye-off" size={24} color="black" />
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
            <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? (
                <Feather name="eye" size={24} color="black" />
              ) : (
                <Feather name="eye-off" size={24} color="black" />
              )}
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>
          <Text style={styles.signInText}>Already have an account? <Text style={styles.signInLink}>Sign in.</Text></Text>
        </View>
        <View style={styles.socialContainer}>
          <Text style={styles.orText}>Or use:</Text>
          <Image source={require('./assets/fb.png')} style={styles.socialIcon} />
          <Image source={require('./assets/t.png')} style={styles.socialIcon} />
          <Image source={require('./assets/g.png')} style={styles.socialIcon} />
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
  headerContainer: {
    alignSelf: 'stretch',
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
    width: 60,
    height: 60,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default SignUpScreen;
