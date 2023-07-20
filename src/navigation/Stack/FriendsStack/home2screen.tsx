import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Friensd from '../../../component/Friends/Friensd';
import home2 from '../../../component/Home/home2';


const Stack = createNativeStackNavigator();
const home2screen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="home2" component={home2} />
        </Stack.Navigator>
    )
}
export default home2screen
