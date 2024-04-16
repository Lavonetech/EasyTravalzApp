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
      <Text style={styles.welcomeText}>Home</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Login"
          onPress={goToLogin}
          color="#007AFF" 
        />
        <Button
          title="Edit Info"
          onPress={goToEditInfo}
          color="#4CD964" 
        />
        <Button
          title="Edit Info"
          onPress={goToEditInfo}
          color="#694D00" 
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
    flexDirection: 'column', 
    justifyContent: 'space-around', 
    width: '80%', 
    height: '15%',
    
  },
});

export default Home;




// import React from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';
// import { useNavigation } from "@react-navigation/native";

// const Home = () => {
//   const navigation = useNavigation(); // Access navigation object

//   const goToLogin = () => {
//     console.log("Go to Login Pressed");
//     navigation.navigate("Login");
//   };

//   const goToEditInfo = () => {
//     console.log("Edit Info Pressed");
//     navigation.navigate("EditPersonalInfo");
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.welcomeText}>Home</Text>
//       <View style={styles.buttonContainer}>
//         <Button
//           title="Go to Login"
//           onPress={goToLogin}
//           color="#007AFF" 
//         />
//         <Button
//           title="Edit Personal Info"
//           onPress={goToEditInfo}
//           color="#4CD964" 
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   welcomeText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   buttonContainer: {
//     flexDirection: 'column', 
//     justifyContent: 'space-around', 
//     width: '80%', 
//     height: '15%',
//   },
// });

// export default Home;
