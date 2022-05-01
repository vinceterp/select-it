import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Input } from './src/components/atoms';
import { Login } from './src/components/organisms/Login';
import { styles } from './src/styles/styles';

export default function App() {
  const [color, setColor] = useState<boolean>(false);

  return (
    <View style={styles.app(color).container}>

      <StatusBar style="auto" />
      <Login />
    </View>
  );
}
