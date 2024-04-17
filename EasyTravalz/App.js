import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import Start from './screens/Start';
import { Ionicons } from '@expo/vector-icons';
import AgencyDetails from './screens/AgencyDetails';
import Inbox from './screens/Inbox';
import Login from './screens/Login';
import User from './screens/user';
import { Image } from 'react-native-elements';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="HomeScreen"
    
   screenOptions={{
     tabBarItemStyle:{
      marginTop:10,
      justifyContent: 'center', 
     },

     
    }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: '', // Hide the name on the bottom navigator
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" size={size} color={color} />
          ),
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: '', // Hide the name on the bottom navigator
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-mail"size={size} color={color} />
          ),
        }}
        name="Inbox"
        component={Inbox}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: '', // Hide the name on the bottom navigator
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-log-in" size={size} color={color} />
          ),
        }}
        name="Login"
        component={Login}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: '', // Hide the name on the bottom navigator
          tabBarIcon: ({  size }) => (
            <Image
              source={require('./assets/home/images/agency/a-1.png')} // Replace 'path/to/user/image.png' with the actual path to your user image
              style={[styles.tabIcon]}
            />
          ),
        }}
        name="User"
        component={User}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after delay
    }, 3000); // 1 seconds delay for demonstration

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(delay);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoading ? (
          <Stack.Screen name="Loading" component={Start} options={{ headerShown: false }} />
        ) : (
          <>
        
          <Stack.Screen
            name="BottomTabNavigator"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />

       <Stack.Screen name="AgencyDetails" component={AgencyDetails} options={({ navigation }) => ({
  headerShown: true,
  headerTitle: '',
  headerLeft: () => (
    <Ionicons
      name="ios-arrow-back"
      size={24}
      color="black"
      onPress={() => navigation.goBack()}
      style={{ marginLeft: 10 }}
    />
  ),
})}
 />
          
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
   width:40,
   height:40,
    resizeMode: 'contain', 
    borderRadius: 50, 
    borderWidth: 1, 
    borderColor: 'black', 
  },
});
export default App;
