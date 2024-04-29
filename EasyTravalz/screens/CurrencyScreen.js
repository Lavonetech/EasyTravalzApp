// import React from 'react';
// import { View, Text, StyleSheet, ScrollView } from 'react-native';

// const CurrencyScreen = () => {
//   const currencies = [
//     { name: 'US Dollar', symbol: '$' },
//     { name: 'Australian Dollar', symbol: '$' },
//     { name: 'Euro', symbol: '€' },
//     { name: 'British Pound', symbol: '£' },
//     { name: 'Japanese Yen', symbol: '¥' },
//     { name: 'Canadian Dollar', symbol: '$' },
//     { name: 'Swiss Franc', symbol: 'CHF' },
//     { name: 'Chinese Yuan', symbol: '¥' },
//     { name: 'Indian Rupee', symbol: '₹' },
//     { name: 'South Korean Won', symbol: '₩' },
//     { name: 'Mexican Peso', symbol: 'Mex$' },
//     { name: 'Brazilian Real', symbol: 'R$' },
//     { name: 'Russian Ruble', symbol: '₽' },
//     { name: 'South African Rand', symbol: 'R' },
//     { name: 'Singapore Dollar', symbol: 'S$' },
//     { name: 'New Zealand Dollar', symbol: 'NZ$' },
//     { name: 'Hong Kong Dollar', symbol: 'HK$' },
//     { name: 'Swedish Krona', symbol: 'kr' },
//     { name: 'Norwegian Krone', symbol: 'kr' },
//     { name: 'Danish Krone', symbol: 'kr' },
//   ];

//   return (

//     <ScrollView contentContainerStyle={styles.container}>
//         <View style={styles.line} />
//       {currencies.map((currency, index) => (
//         <View key={index}>
//           <Text style={styles.currencyName}>{currency.name} - {currency.symbol}</Text>
//           <View style={styles.line} />
//         </View>
//       ))}
//       <View style={styles.line} />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     marginTop: 30,
//   },
//   currencyName: {
//     fontSize: 18,
//     marginTop: 10,
//     marginBottom: 25,
//   },

//   line: {
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     marginBottom: 10,
//   },
// });




import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome from expo vector icons

const CurrencyScreen = () => {
  const currencies = [
    { name: "US Dollar", symbol: "$" },
    { name: "Australian Dollar", symbol: "$" },
    { name: "Euro", symbol: "€" },
    { name: "British Pound", symbol: "£" },
    { name: "Japanese Yen", symbol: "¥" },
    { name: "Canadian Dollar", symbol: "$" },
    { name: "Swiss Franc", symbol: "CHF" },
    { name: "Chinese Yuan", symbol: "¥" },
    { name: "Indian Rupee", symbol: "₹" },
    { name: "South Korean Won", symbol: "₩" },
    { name: "Mexican Peso", symbol: "Mex$" },
    { name: "Brazilian Real", symbol: "R$" },
    { name: "Russian Ruble", symbol: "₽" },
    { name: "South African Rand", symbol: "R" },
    { name: "Singapore Dollar", symbol: "S$" },
    { name: "New Zealand Dollar", symbol: "NZ$" },
    { name: "Hong Kong Dollar", symbol: "HK$" },
    { name: "Swedish Krona", symbol: "kr" },
    { name: "Norwegian Krone", symbol: "kr" },
    { name: "Danish Krone", symbol: "kr" },
  ];

  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]); // Set default currency (US Dollar)

  const handleCurrencyPress = (currency) => {
    console.log("Selected Currency:", currency.name, currency.symbol);
    setSelectedCurrency(currency);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.line} />

      {/* Display selected currency details */}
      {selectedCurrency && (
        <View style={styles.selectedCurrencyContainer}>
          <Text style={styles.selectedCurrencyText}>
            Selected Currency: {selectedCurrency.name} - {selectedCurrency.symbol}
          </Text>
        </View>
      )}
      <View style={styles.line} />

      {/* Render currency list */}
      {currencies.map((currency, index) => (
        <TouchableOpacity key={index} style={styles.currencyContainer} onPress={() => handleCurrencyPress(currency)}>
          <Text style={styles.currencyName}>
            {currency.name} - {currency.symbol}
            <Text>                     </Text>
            <View style={styles.currencyInfo}>
              {/* Render check icon if this currency is selected */}
              {selectedCurrency && selectedCurrency.name === currency.name && (
                <FontAwesome name="check" size={20} color="black" style={styles.icon} />
              )}
            </View>
          </Text>
          <View style={styles.line} />
        </TouchableOpacity>
      ))}
      <View style={styles.line} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    marginTop: 30,
  },
  currencyContainer: {
    justifyContent: "space-between",
    alignItems: "",
  },
  currencyName: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 18,
  },
  currencyInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginVertical: 10,
  },
  selectedCurrencyContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  selectedCurrencyText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CurrencyScreen;
