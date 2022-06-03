import { useState } from 'react'
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native'
import { useBareAuth, useUserPref } from '../../../contexts'
import { COLORS, styles } from '../../../styles'
import { Input, Button } from '../../atoms'
import { NavigationProp } from '@react-navigation/native'

export interface Properties {
  navigation: NavigationProp<any, any>
}

export default function LoginBox({ navigation }: Properties) {
  const { darkMode } = useUserPref();
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const { userData, setUserData } = useBareAuth()

  const handleUsername = (newText: string) => {
    setUsername(newText)
  }
  const handlePassword = (newText: string) => {
    setPassword(newText)
  }
  const setFimiToken = (token: string) => {
    setUserData({ ...userData, token })
  }

  return (
    <View style={styles.app({ darkMode }).loginBoxContainer}>
      <Input
        value={username}
        placeholder="Username"
        onChangeText={handleUsername}
      />
      <Input
        value={password}
        placeholder="Password"
        onChangeText={handlePassword}
        secureTextEntry={true}
      />
      <Button
        buttonTheme="login"
        title="Continue"
        onPress={() => setFimiToken(username)}
      />
      <View
        style={{
          height: 60,
          width: '95%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            ...styles.app({}).buttonText,
            fontWeight: '700',
            fontSize: 18,
          }}
        >
          or
        </Text>
      </View>
      <Button
        icon={
          <Image
            style={styles.app({ darkMode }).smallImage}
            source={require('../../../assets/google_icon.png')}
          />
        }
        buttonTheme="sso-button"
        title="Continue with Google"
        onPress={() => setFimiToken('google')}
      />
      <Button
        icon={
          <Image
            style={styles.app({ darkMode }).smallImage}
            source={require('../../../assets/facebook_icon.png')}
          />
        }
        buttonTheme="sso-button"
        title="Continue with Facebook"
        onPress={() => setFimiToken('facebook')}
      />
      <View
        style={{
          flex: 1,
          alignSelf: 'flex-start',
          justifyContent: 'space-around',
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('SignUp', {})}>
          <Text style={styles.app({ darkMode }).basicText}>
            Don't have an account?
            <Text style={styles.app({ basicTextColor: COLORS.RED }).basicText}>
              {' '}
              Sign up
            </Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('forgot password')}>
          <Text
            style={
              styles.app({ darkMode, basicTextColor: COLORS.RED }).basicText
            }
          >
            Forgot your password?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
