import { View, Text } from 'react-native'
import { Button } from '../../atoms'
import { useBareAuth } from '../../../contexts'
import {Carousel} from '../../molecules';

export default function Home() {
  
  
  return (
    <View>
      <Carousel />
      <Text>I'm a home screen</Text>
    </View>
  )
}
