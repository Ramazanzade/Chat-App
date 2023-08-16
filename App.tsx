import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabbar from './src/navigation/Tabbar/Tabbar';
import Chatscreen2 from './src/navigation/Stack/ChatscreenStack/Chatscreen2';
import OnboardingScreen from './src/navigation/Stack/OnboardingStack/OnboardingScreen';
import LoginRegisterScreen from './src/navigation/Stack/Login-RegistrStack/LoginRegisterScreen';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './src/store/store';
import { AppDispatch } from './src/store/store';
import { loginsucces } from './src/store/features/LoginRegisterStore/LoginregistrSlice';

const Stack = createNativeStackNavigator();

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isAuthenticated = useSelector((state: any) => state.LoginRegisterreducer.user !== null);
  const isFirstLaunch = useSelector((state: any) => state.LoginRegisterreducer.isFirstLaunch); 

  useEffect(() => {
    if (isAuthenticated && isFirstLaunch) {
      dispatch(loginsucces(isAuthenticated));
    }
  }, [isAuthenticated, isFirstLaunch, dispatch]);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Stack.Screen name="Tabbar" component={Tabbar} />
        ) : isFirstLaunch ? (
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        ) : (
          <Stack.Screen name="LoginRegisterScreen" component={LoginRegisterScreen} />
        )}
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
