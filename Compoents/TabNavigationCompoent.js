import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function TabNavigationCompoent() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Singin" component={Singin} />
        <Tab.Screen
          name="Signup"
          component={Singup}
          options={{
            headerBackgroundContainerStyle: 'red',
            headerTintColor: 'pink',
            headerTransparent: 'red',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const Singin = () => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};
const Login = () => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};

const Singup = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
      }}>
      <Text style={{fontSize: 30, color: 'red'}}>Singup</Text>
    </View>
  );
};
