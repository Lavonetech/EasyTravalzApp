import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';

const Tab = createBottomTabNavigator();

const BottomNavBar = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" size={size} color={color} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-log-in" size={size} color={color} />
          ),
          tabBarLabel: 'Login',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavBar;
