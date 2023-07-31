import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabbar from './src/navigation/Tabbar/Tabbar';
import Chatscreen2 from './src/navigation/Stack/ChatscreenStack/Chatscreen2';
import OnboardingScreen from './src/navigation/Stack/OnboardingStack/OnboardingScreen';
import LoginRegisterScreen from './src/navigation/Stack/Login-RegistrStack/LoginRegisterScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen}/>
      <Stack.Screen name="LoginRegisterScreen" component={LoginRegisterScreen}/>  
            <Stack.Screen name="Tabbar" component={Tabbar}/>
            <Stack.Screen name="Chatscreen2" component={Chatscreen2}/>
      </Stack.Navigator>
    </NavigationContainer>
   
  )
}
export default App