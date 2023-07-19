import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginRegister from '../../../component/Login-Register/Login-Register';


const Stack = createNativeStackNavigator();
const LoginRegisterScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="LoginRegister" component={LoginRegister} />
        </Stack.Navigator>
    )
}
export default LoginRegisterScreen
