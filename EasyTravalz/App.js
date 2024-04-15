// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './screens/Home';
// import Login from './screens/Login';
// import Start from './screens/Start';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Login" component={Login} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;





import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import Login from './screens/Login';
import Start from './screens/Start';

const Stack = createStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const delay = setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after delay
    }, 3000); // 3 seconds delay for demonstration

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(delay);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start" headerMode="none">
        {isLoading ? (
          <Stack.Screen name="Start" component={Start} />
        ) : (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={Login} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
