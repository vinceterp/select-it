import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { useUserPref } from '../../../contexts';
import { COLORS, styles } from '../../../styles';

export default function Home() {
  const { darkMode } = useUserPref();
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.app({ darkMode }).loginContainer}
      source={require('../../../assets/userBackground_A.png')}
    >
      <View style={{ width: '100%', padding: '5%', height: '80%' }}></View>
    </ImageBackground>
  );
}
