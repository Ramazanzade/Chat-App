import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from '../../../component/Chat/Chat';


const Stack = createNativeStackNavigator();
const ChatScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
    )
}
export default ChatScreen
