import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {store} from './Redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Details from './src/screens/Details';
import Homescreens from './src/screens/Homescreens';
import Login from './src/screens/Login';
import SerachScreen from './src/screens/SerachScreen';
import {StatusBar, Text, View} from 'react-native';
// import RNBootSplash from 'react-native-bootsplash';
import ListfaltCompoent from './Compoents/ListfaltCompoent';
import OTPScreen from './src/screens/OTPScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator
            screenOptions={{
              animation: 'slide_from_right',
            }}>
            <Stack.Screen
              name="LoginScreen"
              component={Login}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Home"
              component={Homescreens}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="DetailScreen"
              component={Details}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="serachscreens"
              component={SerachScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="OTPScreen"
              component={OTPScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </>
  );
};

export default App;
