import React from 'react';
import { View, Text } from 'react-native';
import { Login } from './src/components/organisms/Login';
import { styles } from './src/styles/styles';
import { useFonts } from 'expo-font';
import { AuthenticationProvider } from './src/contexts';

export default function App() {
  const darkMode = false;

  const [fontsLoaded] = useFonts({
    Roboto: require('./assets/fonts/Roboto.ttf'),
    Roboto_Bold: require('./assets/fonts/Roboto-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthenticationProvider>
      <View style={styles.app({darkMode}).container}>
        <Login />
      </View> 
    </AuthenticationProvider>
  )
}
