import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Addfridens from '../../../component/AddFriends/Addfridens';


const Stack = createNativeStackNavigator();
const Addfridesscreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Addfridens" component={Addfridens} />
        </Stack.Navigator>
    )
}
export default Addfridesscreen
