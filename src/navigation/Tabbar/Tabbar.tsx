import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faGear, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import tabbarcss from './tabbarcss';
import HomeScreen from '../Stack/HomeStack/HomeScreen';
import Addfridesscreen from '../Stack/AddfridensStack/Addfridesscreen';
import ProfileScreen from '../Stack/ProfileStack/ProfileScreen';



const Tab = createBottomTabNavigator();



const Tabbar = ({ route }: any) => {
  return (
    <Tab.Navigator 
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        height: 100,
        shadowColor: '#771F98',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        borderTopLeftRadius:30,
        borderTopRightRadius:30
        
      },
      tabBarInactiveBackgroundColor: '#F8F8F8', 
            tabBarActiveTintColor: "#771F98",

    }}
  > 
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }:any) => <FontAwesomeIcon icon={faHome} style={tabbarcss.tabIcon} size={35} />,
          tabBarShowLabel: false,
        }}
        name="HomeScreen" component={HomeScreen}
      />
       <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }:any) => <FontAwesomeIcon icon={faUserPlus} style={tabbarcss.tabIcon} size={35} />,
          tabBarShowLabel: false,
        }}
        name="Addfridesscreen" component={Addfridesscreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }:any) => <FontAwesomeIcon icon={faGear} style={tabbarcss.tabIcon} size={35} />,
          tabBarShowLabel: false,
        }}
        name="ProfileScreen" component={ProfileScreen}
      />
    </Tab.Navigator>
  )
}

export default Tabbar;
