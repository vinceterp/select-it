import React from 'react';
import { View, Text } from 'react-native';
import { Navigation } from './src/components/organisms';
import { styles } from './src/styles/styles';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { AuthenticationProvider } from './src/contexts';

export default function App() {
  const darkMode = false;

  const [fontsLoaded] = useFonts({
    Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return (<AppLoading />);
  }

  return (
    <AuthenticationProvider>
      <View style={styles.app({darkMode}).container}>
        <Navigation />
      </View> 
    </AuthenticationProvider>
  )
}
