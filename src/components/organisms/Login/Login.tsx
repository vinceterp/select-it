import { NavigationProp } from '@react-navigation/native'
import React from 'react'
import { ImageBackground, View, Image } from 'react-native'
import { useUserPref } from '../../../contexts'
import { styles } from '../../../styles/styles'
import { LoginBox } from '../../molecules/LoginBox'

export interface Properties {
  navigation: NavigationProp<any, any>
}

export default function Login({ navigation }: Properties) {
  const { darkMode } = useUserPref();

  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.app({ darkMode }).loginContainer}
      source={require('../../../assets/loginBackground_A.png')}
    >
      <View style={styles.app({ darkMode }).loginInnerContainer}>
        <View style={styles.app({ darkMode }).mediumImageContainer}>
          <Image
            source={require('../../../assets/select_it_logo.png')}
            style={styles.app({ darkMode }).mediumImage}
          />
        </View>
        <LoginBox navigation={navigation} />
      </View>
    </ImageBackground>
  )
}
