

import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { useNavigation,useRoute } from "@react-navigation/native";

const EditPersonalInfo = () => {
  const navigation = useNavigation(); // Access navigation object
  const route = useRoute();
  const {userName}=route.params;

  // Load the Roboto fonts
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  // useEffect hook to handle side effects (currently empty)
  useEffect(() => {
    
  }, []); 

  // Check if fonts are loaded before rendering
  if (!fontsLoaded) {
    return null; // Render nothing until fonts are loaded
  }


  const handleChangeCurrencyPress = () => {
    console.log("Change currency Pressed");
    navigation.navigate("CurrencyScreen");
  };


  const handlePersonalInfoPress = () => {
    console.log("Personal Information Pressed");
    navigation.navigate("EditProfile");
  };

  const handlePaymentHistoryPress = () => {
    console.log("Payment History Pressed");
  };

  const handlePaymentMethodPress = () => {
    console.log("Payment Method Pressed");
    navigation.navigate("Edit");
  };

  const handlePromocodesPress = () => {
    console.log("Promocodes Pressed");
  };

  const handleMybookingsPress = () => {
    console.log("Bookings Pressed");
  };

  const handleListYourAgencyPress = () => {
    console.log("List your Agency Pressed");
    navigation.navigate("EditYourAgency");
  };

  const handleFAQPress = () => {
    console.log("FAQ Pressed");
  };

  const handleSignOutPress = () => {
    console.log("Sign out Pressed");
  };

  return (
    <View style={styles.container}>
      {/* Top Section: Profile Image and User Info */}
      <View style={styles.topSection}>
        <Image
          source={require("../assets/editpersonalinfo/profile.jpeg")}
          style={styles.profileImage}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{userName}</Text>
          <View style={styles.currencyRow}>
            <Text style={styles.currencyText}>$ - USD</Text>
            <TouchableOpacity
              onPress={handleChangeCurrencyPress}
              
            >
              <Text style={styles.changeCurrencyText}>
                Change currency {">>"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Divider Line */}
      <View style={styles.divider} />

      {/* Section: Personal Information */}
      <TouchableOpacity
        style={styles.section}
        onPress={handlePersonalInfoPress}
      >
        <Image
          source={require("../assets/editpersonalinfo/person.png")}
          style={styles.sectionIcon}
        />
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <View style={styles.arrowContainer}>
          <Image
            source={require("../assets/editpersonalinfo/arrow.png")}
            style={styles.arrowIcon}
          />
        </View>
      </TouchableOpacity>

      {/* Divider Line */}
      <View style={styles.divider} />

      {/* Section: Payment History */}
      <TouchableOpacity
        style={styles.section}
        onPress={handlePaymentHistoryPress}
      >
        <Image
          source={require("../assets/editpersonalinfo/history.png")}
          style={styles.sectionIcon}
        />
        <Text style={styles.sectionTitle}>Payment History</Text>
        <View style={styles.arrowContainer}>
          <Image
            source={require("../assets/editpersonalinfo/arrow.png")}
            style={styles.arrowIcon}
          />
        </View>
      </TouchableOpacity>

      {/* Divider Line */}
      <View style={styles.divider} />

      {/* Section: Payment method */}
      <TouchableOpacity
        style={styles.section}
        onPress={handlePaymentMethodPress}
      >
        <Image
          source={require("../assets/editpersonalinfo/method.png")}
          style={styles.sectionIcon}
        />
        <Text style={styles.sectionTitle}>Payment method</Text>
        <View style={styles.arrowContainer}>
          <Image
            source={require("../assets/editpersonalinfo/arrow.png")}
            style={styles.arrowIcon}
          />
        </View>
      </TouchableOpacity>

      {/* Divider Line */}
      <View style={styles.divider} />

      {/* Section: Promocodes */}
      <TouchableOpacity style={styles.section} onPress={handlePromocodesPress}>
        <Image
          source={require("../assets/editpersonalinfo/Promocodes.png")}
          style={styles.sectionIcon}
        />
        <Text style={styles.sectionTitle}>Promocodes</Text>
        <View style={styles.arrowContainer}>
          <Image
            source={require("../assets/editpersonalinfo/arrow.png")}
            style={styles.arrowIcon}
          />
        </View>
      </TouchableOpacity>

      {/* Divider Line */}
      <View style={styles.divider} />

      {/* Section: My bookings */}
      <TouchableOpacity style={styles.section} onPress={handleMybookingsPress}>
        <Image
          source={require("../assets/editpersonalinfo/bookings.png")}
          style={styles.sectionIcon}
        />
        <Text style={styles.sectionTitle}>My bookings</Text>
        <View style={styles.arrowContainer}>
          <Image
            source={require("../assets/editpersonalinfo/arrow.png")}
            style={styles.arrowIcon}
          />
        </View>
      </TouchableOpacity>

      {/* Divider Line */}
      <View style={styles.divider} />

      {/* Section: List your Agency */}
      <TouchableOpacity
        style={styles.section}
        onPress={handleListYourAgencyPress}
      >
        <Image
          source={require("../assets/editpersonalinfo/agency.png")}
          style={styles.sectionIcon}
        />
        <Text style={styles.sectionTitle}>List your Agency</Text>
        <View style={styles.arrowContainer}>
          <Image
            source={require("../assets/editpersonalinfo/arrow.png")}
            style={styles.arrowIcon}
          />
        </View>
      </TouchableOpacity>

      {/* Divider Line */}
      <View style={styles.divider} />

      {/* Section: FAQ */}
      <TouchableOpacity style={styles.section} onPress={handleFAQPress}>
        <Image
          source={require("../assets/editpersonalinfo/FAQ.png")}
          style={styles.sectionIcon}
        />
        <Text style={styles.sectionTitle}>FAQ</Text>
        <View style={styles.arrowContainer}>
          <Image
            source={require("../assets/editpersonalinfo/arrow.png")}
            style={styles.arrowIcon}
          />
        </View>
      </TouchableOpacity>

      {/* Divider Line */}
      <View style={styles.divider} />

      {/* Section: Sign out */}
      <TouchableOpacity style={styles.section} onPress={handleSignOutPress}>
        <Image
          source={require("../assets/editpersonalinfo/Signout.png")}
          style={styles.sectionIcon}
        />
        <Text style={styles.sectionTitle}>Sign out</Text>
      </TouchableOpacity>

      {/* Divider Line */}
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 30,
    fontFamily: "Roboto_400Regular",
  },
  topSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 30,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 30,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 30,
    fontFamily: "Roboto_700Bold",
  },
  currencyRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  currencyText: {
    color: "#777",
    fontSize: 16,
    marginRight: 10,
    fontFamily: "Roboto_400Regular",
  },
  changeCurrencyText: {
    color: "#2194FF",
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 20,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    position: "relative",
  },
  sectionIcon: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
  sectionTitle: {
    fontSize: 18,
    flex: 1,
    fontFamily: "Roboto_700Bold",
  },
  arrowContainer: {
    position: "absolute",
    right: 0,
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
});

export default EditPersonalInfo;