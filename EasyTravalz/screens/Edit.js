import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Button } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

const Edit = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [location, setLocation] = useState('');

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  // Check if fonts are loaded before rendering
  if (!fontsLoaded) {
    return null; // Render nothing until fonts are loaded
  }
  
  const handleUpdatePhoto = () => {
    console.log('Update photo button pressed');
    // Implement logic to update photo here
  };

  const handleSubmit = () => {
    console.log('Form submitted:', { name, email, mobile, location });
    // Implement logic to handle form submission
  };

  return (
    <View style={styles.container}>
      {/* Profile Photo Section */}
      <View style={styles.profileSection}>
        <Image
          source={require('../assets/editpersonalinfo/profile.jpeg')}
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.cameraButton} onPress={handleUpdatePhoto}>
          <View style={styles.cameraContainer}>
            <Image
              source={require('../assets/camera.png')}
              style={styles.cameraIcon}
            />
            <Text style={styles.cameraButtonText}>Update photo</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Form Section */}
      <View style={styles.formSection}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          value={mobile}
          onChangeText={setMobile}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Location"
          value={location}
          onChangeText={setLocation}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 30,
    fontFamily: 'Roboto_400Regular',
  },
  profileSection: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 20,
  },
  cameraButton: {
    backgroundColor: 'transparent',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  cameraContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cameraIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  cameraButtonText: {
    color: '#2196F3',
    fontSize: 16,
    fontFamily: 'Roboto_700Bold',
  },
  formSection: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Roboto_700Bold', // Apply Roboto font to button text
  },
});

export default Edit;
