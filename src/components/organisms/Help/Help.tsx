import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, View } from 'react-native';
import { useUserPref } from '../../../contexts';
import { COLORS, styles } from '../../../styles';
import { Button, Icon, Label } from '../../atoms';

export interface Properties {
  navigation: NavigationProp<any, any>;
}

export default function Help({ navigation }: Properties) {
  const { darkMode } = useUserPref();
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.app({ darkMode }).loginContainer}
      source={require('../../../assets/userBackground_A.png')}
    >
      <View style={{ width: '100%', padding: '5%', height: '80%' }}>
        <View
          style={{
            backgroundColor: COLORS.WHITE,
            height: '85%',
            borderRadius: 30,
            padding: '5%',
            alignItems: 'center',
          }}
        >
          <View style={{ flex: 1, width: '100%' }}>
            <Label
              label="Frequently Asked Questions"
              size="L"
              color={COLORS.BLACK}
            />
          </View>
          <Button
            buttonTheme="primary"
            title="Contact Us"
            icon={<Icon name="Chat" fill={COLORS.WHITE} />}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
