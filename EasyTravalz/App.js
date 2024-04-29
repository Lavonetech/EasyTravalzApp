// import React, { useState, useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './screens/Home';
// import Login from './screens/Login';
// import Start from './screens/Start';
// import EditPersonalInfo from './screens/EditPersonalInfo';
// import Edit from './screens/Edit'; //gg
// import CurrencyScreen from './screens/CurrencyScreen';
// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="EditPersonalInfo" component={EditPersonalInfo} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;





// import React, { useState, useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './screens/Home';
// import Login from './screens/Login';
// import Start from './screens/Start';
// import EditPersonalInfo from './screens/EditPersonalInfo';
// import Edit from './screens/Edit'; //gg
// import CurrencyScreen from './screens/CurrencyScreen';
// import EditYourAgency from './screens/EditYourAgency'; 
// import Register from './screens/Register';

// const Stack = createStackNavigator();

// const App = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading delay
//     const delay = setTimeout(() => {
//       setIsLoading(false); // Set isLoading to false after delay
//     }, 3000); // 3 seconds delay for demonstration

//     // Clean up the timeout to avoid memory leaks
//     return () => clearTimeout(delay);
//   }, []);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Start" headerMode="none">
//         {isLoading ? (
//           <Stack.Screen name="Start" component={Start} />
//         ) : (
//           <>
//             <Stack.Screen name="Home" component={HomeScreen} />
//             <Stack.Screen name="Login" component={Login} />
//             <Stack.Screen name="EditPersonalInfo" component={EditPersonalInfo} />
//             <Stack.Screen name="Edit" component={Edit} /> 
//             {/* //gg */}
//             <Stack.Screen name="CurrencyScreen" component={CurrencyScreen} /> 
//             <Stack.Screen name="EditYourAgency" component={EditYourAgency} /> 
//             <Stack.Screen name="Register" component={Register} /> 
//           </>
//         )}
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
import EditPersonalInfo from './screens/EditPersonalInfo';
import Edit from './screens/Edit'; //gg
import CurrencyScreen from './screens/CurrencyScreen';
import EditYourAgency from './screens/EditYourAgency'; 
import Register from './screens/Register';
import Destination from './screens/Destination';
import Main from './screens/Main';
import PaymentMethod from './screens/PaymentMethod';

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
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{ headerShown: false }} 
      >
        {isLoading ? (
          <Stack.Screen name="Start" component={Start} />
        ) : (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="EditPersonalInfo" component={EditPersonalInfo} />
            <Stack.Screen name="Edit" component={Edit} />
            <Stack.Screen name="CurrencyScreen" component={CurrencyScreen} />
            <Stack.Screen name="EditYourAgency" component={EditYourAgency} /> 
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Destination" component={Destination} />
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
