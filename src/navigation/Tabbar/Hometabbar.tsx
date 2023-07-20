import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FriendsScreen from '../Stack/FriendsStack/FriendsScreen';
import ChatScreen from '../Stack/ChatStack/ChatScreen';
import CallScreen from '../Stack/CallStack/CallScreen';

const Tab = createMaterialTopTabNavigator();

const Hometabbar = () => {
  return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'gray',
          tabBarLabelStyle: { fontSize: 25 },
          tabBarStyle: { backgroundColor: 'black' },
        }}
      >
        <Tab.Screen name="Friends" component={FriendsScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Call" component={CallScreen} />
      </Tab.Navigator>
  );
};

export default Hometabbar;
