import { NavigationProp } from '@react-navigation/native'
import React from 'react'
import { Switch, TouchableOpacity, View } from 'react-native'
import { useBareAuth, useUserPref } from '../../../contexts'
import { useToggle } from '../../../hooks'
import { COLORS, styles } from '../../../styles'
import { Label, Button } from '../../atoms'

export interface Properties {
  navigation: NavigationProp<any, any>
}

export default function Settings({ navigation }: Properties) {
  const { logout } = useBareAuth();
  const { darkMode, alarmNotification, toggleAlarmNotification, toggleDarkMode } = useUserPref();

  return (
    <View style={{ backgroundColor: COLORS.PRIMARY_GREY, flex: 1, alignItems: 'center', margin: 0, padding: 20 }}>
      <View style={styles.app({darkMode}).settingsToggleBox}>
        <TouchableOpacity onPress={() => toggleAlarmNotification()} style={{ display: 'flex', flexDirection: 'row', marginBottom: 20, width: '100%', justifyContent: 'space-between', alignItems: 'center' , height: 30 }} >
          <Label label="Alarm Notification" size="M" color={COLORS.SECONDARY_GREY} />
          <Switch 
            value={alarmNotification}
            onValueChange={() => toggleAlarmNotification()}
            trackColor={{false: COLORS.SECONDARY_GREY, true: COLORS.PRIMARY_GREEN}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleDarkMode()} style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' , height: 30 }}  >
          <Label label="Dark Mode" size="M" color={COLORS.SECONDARY_GREY} />
          <Switch 
            value={darkMode}
            onValueChange={() => toggleDarkMode()}
            trackColor={{false: COLORS.SECONDARY_GREY, true: COLORS.PRIMARY_GREEN}}
          />
        </TouchableOpacity>
      </View>
      <Button title="Logout" onPress={logout} buttonTheme="login" />
    </View>
  )
}
