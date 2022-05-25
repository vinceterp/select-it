import { NavigationProp } from '@react-navigation/native'
import React from 'react'
import { View, Image, ImageBackground } from 'react-native'
import { styles } from '../../../styles'
import { Label } from '../../atoms'
import { SignUpBox } from '../../molecules'

export interface Properties {
  navigation: NavigationProp<any, any>
}

export default function Signup({ navigation }: Properties) {
  const darkMode = false
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
        <SignUpBox navigation={navigation} />
      </View>
    </ImageBackground>
  )
}
