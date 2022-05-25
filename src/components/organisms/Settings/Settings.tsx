import { NavigationProp } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import { COLORS } from '../../../styles'
import { Label } from '../../atoms'

export interface Properties {
  navigation: NavigationProp<any, any>
}

export default function Settings({ navigation }: Properties) {
  return (
    <View>
      <Label label="I'm the settings" size="L" color={COLORS.BLACK}></Label>
    </View>
  )
}
