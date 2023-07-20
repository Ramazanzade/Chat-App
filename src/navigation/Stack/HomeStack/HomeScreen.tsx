import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginRegister from '../../../component/Login-Register/Login-Register';
import Home from '../../../component/Home/Home';


const Stack = createNativeStackNavigator();
const HomeScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}
export default HomeScreen
