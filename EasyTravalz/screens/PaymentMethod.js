
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { useNavigation } from "@react-navigation/native";

const PaymentMethod = () => {
  const navigation = useNavigation(); // Access navigation object

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  const handle1Press = () => {
    console.log("1 Pressed");
  };

  const handle2Press = () => {
    console.log("2 Pressed");
  };

  const handle3Press = () => {
    console.log("3 Pressed");
  };

  const handle4Press = () => {
    console.log("4 Pressed");
  };

  const handle5Press = () => {
    console.log("5 Pressed");
  };

  const handle6Press = () => {
    console.log("6 Pressed");
  };

 
  const handleAddPaymentMethodPress = () => {
    console.log("+ Add Another Payment Method clicked");
    // Add logic here to handle adding a new payment method
  };

  if (!fontsLoaded) {
    return null; // Render nothing until fonts are loaded
  }

  return (
    <View style={styles.container}>
      {/* Divider Line */}
      <View style={styles.dividerTop} />

      {/* Section: 1 */}
      <TouchableOpacity
        style={styles.section}
        onPress={handle1Press}
      >
        <Image
           source={require("../assets/paymentMethod/1.png")}
          style={styles.sectionIcon}
        />
        <Text style={styles.sectionTitle}>Use my Osprey card</Text>
        <View style={styles.arrowContainer}>
          <Image
            source={require("../assets/paymentMethod/edit.png")}
            style={styles.arrowIcon}
          />
        </View>
      </TouchableOpacity>

      {/* Divider Line */}
      <View style={styles.divider} />

      {/* Section: 2 */}
      <TouchableOpacity
        style={styles.section}
        onPress={handle2Press}
      >
        <Image
           source={require("../assets/paymentMethod/2.png")}
          style={styles.sectionIcon}
        />
        <Text style={styles.sectionTitle}>**** **** **** 4864</Text>
        <View style={styles.arrowContainer}>
          <Image
            source={require("../assets/paymentMethod/edit.png")}
            style={styles.arrowIcon}
          />
        </View>
      </TouchableOpacity>

      {/* Divider Line */}
      <View style={styles.divider} />

      {/* Section: 3 */}
      <TouchableOpacity
        style={styles.section}
        onPress={handle3Press}
      >
        <Image
          source={require("../assets/paymentMethod/3.png")}
          style={styles.sectionIcon}
        />
        <Text style={styles.sectionTitle}>**** **** **** 5874</Text>
        <View style={styles.arrowContainer}>
          <Image
            source={require("../assets/paymentMethod/edit.png")}
            style={styles.arrowIcon}
          />
        </View>
      </TouchableOpacity>

      {/* Divider Line */}
      <View style={styles.divider} />

      {/* Section: 4 */}
      <TouchableOpacity style={styles.section} onPress={handle4Press}>
        <Image
           source={require("../assets/paymentMethod/4.png")}
          style={styles.sectionIcon}
        />
        <Text style={styles.sectionTitle}>sample********@gmail.com</Text>
        <View style={styles.arrowContainer}>
          <Image
            source={require("../assets/paymentMethod/edit.png")}
            style={styles.arrowIcon}
          />
        </View>
      </TouchableOpacity>

      {/* Divider Line */}
      <View style={styles.divider} />

      {/* Section: 5 */}
      <TouchableOpacity style={styles.section} onPress={handle5Press}>
        <Image
           source={require("../assets/paymentMethod/5.png")}
          style={styles.sectionIcon}
        />
        <Text style={styles.sectionTitle}> </Text>
        <View style={styles.arrowContainer}>
          <Image
            source={require("../assets/paymentMethod/Add.png")}
            style={styles.addIcon}
          />
        </View>
      </TouchableOpacity>

      {/* Divider Line */}
      <View style={styles.divider} />

      {/* Section: 6 */}
      <TouchableOpacity
        style={styles.section}
        onPress={handle6Press}
      >
        <Image
          source={require("../assets/paymentMethod/6.png")}
          style={styles.sectionIcon}
        />
        <Text style={styles.sectionTitle}> </Text>
        <View style={styles.arrowContainer}>
          <Image
            source={require("../assets/paymentMethod/Add.png")}
            style={styles.addIcon}
          />
        </View>
      </TouchableOpacity>

      {/* Divider Line */}
      <View style={styles.divider} />

      {/* Section: Add Another Payment Method */}
      <TouchableOpacity
        style={styles.addPaymentMethod}
        onPress={handleAddPaymentMethodPress}
      >
        <Text style={styles.addPaymentMethodText}>
          + Add Another Payment Method
        </Text>
      </TouchableOpacity>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 30,
  },
  dividerTop: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 20,
    marginTop: 30,
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
    width: 44,
    height: 30,
    marginRight: 20,
  },
  sectionTitle: {
    fontSize: 17,
    flex: 1,
    fontFamily: "Roboto_400Regular",
    color: "gray",
  },
  arrowContainer: {
    position: "absolute",
    right: 0,
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
  addIcon: {
    width: 39,
    height: 12,
  },
  addPaymentMethod: {
    backgroundColor: "#F8F6F6",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  addPaymentMethodText: {
    color: "#2194FF",
    fontSize: 18,
    fontFamily: "Roboto_700Bold",
    padding: 10,
  },
});

export default PaymentMethod;
