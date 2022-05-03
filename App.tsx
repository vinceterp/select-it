import React from 'react';
import { View, Text } from 'react-native';
import { Login } from './src/components/organisms/Login';
import { styles } from './src/styles/styles';
import { useFonts } from 'expo-font';

export default function App() {
  const darkMode = false;

  const [fontsLoaded] = useFonts({
    Roboto: require('./assets/fonts/Roboto.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.app({darkMode}).container}>
      <Login />
    </View> 
  )
}
