import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboardig from '../../../component/Onboarding/Onboardig';


const Stack = createNativeStackNavigator();
const OnboardingScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Onboardig" component={Onboardig} />
        </Stack.Navigator>
    )
}
export default OnboardingScreen
