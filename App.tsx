import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabbar from './src/navigation/Tabbar/Tabbar';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      {/* <Stack.Screen name="OnboardingScreen" component={OnboardingScreen}/>
      <Stack.Screen name="LoginRegisterScreen" component={LoginRegisterScreen}/>   */}
            <Stack.Screen name="Tabbar" component={Tabbar}/> 
      </Stack.Navigator>
    </NavigationContainer>
   
  )
}
export default App