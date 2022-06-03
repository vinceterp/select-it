import { NavigationProp } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import { useUserPref } from '../../../contexts'
import { styles } from '../../../styles'
import { Label } from '../../atoms'

export interface Properties {
  navigation: NavigationProp<any, any>
}

export default function SignUpBox({ navigation }: Properties) {
  const { darkMode } = useUserPref();
  return (
    <View style={styles.app({ darkMode }).loginBoxContainer}>
      <Label label="Sign Up" size="L" />
    </View>
  )
}
