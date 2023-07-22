import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboardig from '../../../component/Onboarding/Onboardig';
import Profile from '../../../component/Profile/Profile';


const Stack = createNativeStackNavigator();
const ProfileScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}
export default ProfileScreen
