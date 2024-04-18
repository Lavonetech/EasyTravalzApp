import React, { useState, useEffect } from 'react';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import Start from './screens/Start';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import AgencyDetails from './screens/AgencyDetails';
import Inbox from './screens/Inbox';
import Login from './screens/Login';
import User from './screens/User';
import { Image } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import Register from './screens/Register';
import EditPersonalInfo from './screens/EditPersonalInfo';
import Edit from './screens/Edit';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({route}) => {
 
  

  const { userName } = route.params;
  return (
    <Tab.Navigator initialRouteName="HomeScreen"
    
   screenOptions={{
     tabBarItemStyle:{
    
      justifyContent: 'center', 
      marginBottom:-5
     },

    }}
    >
      <Tab.Screen
        name="HomeScreen"
        initialParams={{ userName: userName }}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" size={size+8} color={color} />
          ),
        }}
      >
        {() => <HomeScreen userName={userName} />}
      </Tab.Screen>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: '', // Hide the name on the bottom navigator
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-mail"size={size+10} color={color} />
          ),
        }}
        name="Inbox"
        component={Inbox}
      />

<Tab.Screen
        name="Profile"
        component={EditPersonalInfo}
        initialParams={{ userName: userName }}
        options={{  
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" size={size + 15} color={color} />
          ),
        }}
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
          <Stack.Screen name="Loading" component={Register} options={{ headerShown: false }} />
        
          <Stack.Screen
            name="BottomTabNavigator"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
      <Stack.Screen name="Login" component={Login} 
      
      options={({ navigation }) => ({
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
      <Stack.Screen name="Register" component={Register} 
      
      options={({ navigation }) => ({
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
       <Stack.Screen name="EditProfile" component={Edit} options={({ navigation }) => ({
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
