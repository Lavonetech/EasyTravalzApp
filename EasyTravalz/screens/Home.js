import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Home = ({ navigation }) => {
  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const goToEditInfo = () => {
    navigation.navigate('EditPersonalInfo');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to My App!</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Login"
          onPress={goToLogin}
          color="#007AFF" // Custom button color
        />
        <Button
          title="Edit Info"
          onPress={goToEditInfo}
          color="#4CD964" // Custom button color
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row', // Align buttons horizontally
    justifyContent: 'space-around', // Evenly space buttons
    width: '80%', // Take up 80% of container width
  },
});

export default Home;
