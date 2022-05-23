import { NavigationProp } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import { styles } from '../../../styles'

export interface Properties {
  navigation: NavigationProp<any, any>
}

export default function SignUpBox({ navigation }: Properties) {
  const darkMode = false
  return <View style={styles.app({ darkMode }).loginBoxContainer}></View>
}
