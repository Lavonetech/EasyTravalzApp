import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  HomeScreen from './screens/Home';
import Login from './screens/Login';
import Start from './screens/Start';
import AgencyDetails from './screens/AgencyDetails';


const Stack = createStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const delay = setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after delay
    }, 1000); // 3 seconds delay for demonstration

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(delay);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoading ? (
          <Stack.Screen name="Loading" component={Start} options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="Home" component={ HomeScreen} options={{ headerShown: false }} />
        )}
        <Stack.Screen name="AgencyDetails" component={ AgencyDetails} options={{ headerShown: false }} />
      </Stack.Navigator>

   
    </NavigationContainer>
  );
};

export default App;