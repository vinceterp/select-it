import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { Switch, TouchableOpacity, View } from 'react-native';
import { useBareAuth, useUserPref } from '../../../contexts';
import { useToggle } from '../../../hooks';
import { COLORS, styles } from '../../../styles';
import { Label, Button, Icon } from '../../atoms';

export interface Properties {
  navigation: NavigationProp<any, any>;
}

export default function Settings({ navigation }: Properties) {
  const { logout } = useBareAuth();
  const {
    darkMode,
    alarmNotification,
    toggleAlarmNotification,
    toggleDarkMode,
  } = useUserPref();

  return (
    <View
      style={{
        backgroundColor: darkMode ? COLORS.DARK_MODE : COLORS.PRIMARY_GREY,
        flex: 1,
        alignItems: 'center',
        margin: 0,
        padding: 20,
      }}
    >
      <View style={styles.app({ darkMode }).settingsToggleBox}>
        <TouchableOpacity
          onPress={() => toggleAlarmNotification()}
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginBottom: 20,
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 30,
          }}
        >
          <Label
            label="Alarm Notification"
            size="M"
            color={darkMode ? COLORS.WHITE : COLORS.SECONDARY_GREY}
          />
          <Switch
            value={alarmNotification}
            onValueChange={() => toggleAlarmNotification()}
            trackColor={{
              false: COLORS.SECONDARY_GREY,
              true: COLORS.PRIMARY_GREEN,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleDarkMode()}
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 30,
          }}
        >
          <Label
            label="Dark Mode"
            size="M"
            color={darkMode ? COLORS.WHITE : COLORS.SECONDARY_GREY}
          />
          <Switch
            value={darkMode}
            onValueChange={() => toggleDarkMode()}
            trackColor={{
              false: COLORS.SECONDARY_GREY,
              true: COLORS.PRIMARY_GREEN,
            }}
          />
        </TouchableOpacity>
      </View>
      <Button
        title="Pair Device"
        onPress={() => console.warn('pair device')}
        buttonTheme="primary"
        icon={<Icon name="Plus" fill={COLORS.WHITE} />}
      />
      <Button
        title="Edit Background"
        onPress={() => console.warn('edit background')}
        buttonTheme="primary"
        icon={<Icon name="Edit" fill={COLORS.WHITE} />}
      />
      <View style={{ height: 35 }} />
      <Button
        title="Change Password"
        onPress={() => console.warn('change password')}
        buttonTheme="primary"
      />
      <Button title="Sign Out" onPress={logout} buttonTheme="primary" />
    </View>
  );
}
