import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chatscreen from '../../../component/Chatscreen/Chatscreen';


const Stack = createNativeStackNavigator();
const Chatscreen2 = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Chatscreen" component={Chatscreen} />
        </Stack.Navigator>
    )
}
export default Chatscreen2
