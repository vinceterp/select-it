import { View, Text } from 'react-native'
import { Button } from '../../atoms'
import { useBareAuth } from '../../../contexts'

export default function Home() {
  const { userData, setUserData } = useBareAuth()
  const logout = () => {
    setUserData({ ...userData, token: '' })
  }
  return (
    <View>
      <Text>I'm a home screen</Text>
      <Button title="Logout" onPress={logout} buttonTheme="login" />
    </View>
  )
}
