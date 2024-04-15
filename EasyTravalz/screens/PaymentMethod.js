import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PaymentMethod = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the PaymentMethod Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PaymentMethod;
