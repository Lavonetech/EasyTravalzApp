import React from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';

const Start = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logoImage} />
      </View>
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size="large" color="#FFFFFF" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003580',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  spinnerContainer: {
    marginTop: 20,
  },
});

export default Start;
