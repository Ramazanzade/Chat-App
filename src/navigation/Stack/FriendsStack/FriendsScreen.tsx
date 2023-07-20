import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Friensd from '../../../component/Friends/Friensd';


const Stack = createNativeStackNavigator();
const FriendsScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Friensd" component={Friensd} />
        </Stack.Navigator>
    )
}
export default FriendsScreen
