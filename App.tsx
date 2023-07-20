import { StatusBar, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './src/navigation/Stack/OnboardingStack/OnboardingScreen';
import LoginRegisterScreen from './src/navigation/Stack/Login-RegistrStack/LoginRegisterScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen}/>
      <Stack.Screen name="LoginRegisterScreen" component={LoginRegisterScreen}/>  
      </Stack.Navigator>
    </NavigationContainer>
   
  )
}
export default App