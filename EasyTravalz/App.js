import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import Start from './screens/Start';
import { Ionicons } from '@expo/vector-icons';
import AgencyDetails from './screens/AgencyDetails';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="HomeScreen">
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" headerShown={false} size={size} color={color} />
          ),
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after delay
    }, 1000); // 1 seconds delay for demonstration

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

export default App;
