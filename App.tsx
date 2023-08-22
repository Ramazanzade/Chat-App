import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { store } from './src/store/store';
import { loginsucces } from './src/store/features/LoginRegisterStore/LoginregistrSlice';
import Tabbar from './src/navigation/Tabbar/Tabbar';
import Chatscreen2 from './src/navigation/Stack/ChatscreenStack/Chatscreen2';
import OnboardingScreen from './src/navigation/Stack/OnboardingStack/OnboardingScreen';
import LoginRegisterScreen from './src/navigation/Stack/Login-RegistrStack/LoginRegisterScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const isAuthenticated = useSelector((state:any) => state.LoginRegisterreducer.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const savedUser = await AsyncStorage.getItem('user'); // Use AsyncStorage
        if (savedUser) {
          dispatch(loginsucces(savedUser));
        }
      } catch (error) {
        console.error('Error fetching user from AsyncStorage:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>   
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />   
      <Stack.Screen name="LoginRegisterScreen" component={LoginRegisterScreen} />
        <Stack.Screen name="Tabbar" component={Tabbar} />
            <Stack.Screen name="Chatscreen2" component={Chatscreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const BigApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default BigApp;