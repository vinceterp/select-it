import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, Linking, View } from 'react-native';
import { useUserPref } from '../../../contexts';
import { COLORS, styles } from '../../../styles';
import { Button, Icon, Label } from '../../atoms';
import { FaqSection } from '../../molecules';

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
            backgroundColor: darkMode ? 'rgba(18, 18, 18, 0.95)' : 'rgba(255, 255, 255, 0.95)',
            height: '90%',
            borderRadius: 30,
            padding: '5%',
            alignItems: 'center',
          }}
        >
          <View style={{ flex: 1, width: '100%', marginBottom: 20 }}>
            <Label
              label="Frequently Asked Questions"
              size="L"
              color={ darkMode ? COLORS.WHITE : COLORS.BLACK}
            />
            <FaqSection />
          </View>
          <Button
            buttonTheme="primary"
            title="Contact Us"
            onPress={() =>
              Linking.openURL(
                'whatsapp://send?text=hello, i have a question&phone=18765472621'
              )
            }
            icon={<Icon name="Whatsapp" />}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
