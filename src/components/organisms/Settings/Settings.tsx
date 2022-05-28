import { NavigationProp } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import { useBareAuth } from '../../../contexts'
import { COLORS } from '../../../styles'
import { Label, Button } from '../../atoms'
import { Carousel } from '../../molecules'

export interface Properties {
  navigation: NavigationProp<any, any>
}

export default function Settings({ navigation }: Properties) {
  const { logout } = useBareAuth();
  return (
    <View>
      <Carousel />
      <Label label="I'm the settings" size="L" color={COLORS.BLACK}></Label>
      <Button title="Logout" onPress={logout} buttonTheme="login" />
    </View>
  )
}
