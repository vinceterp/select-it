import { View, Text } from 'react-native';
import { styles } from '../../../styles';

export default function Signup (){
    return (
        <View style={styles.app({}).container}>
            <Text>
                I'm a Sign Up screen
            </Text>
        </View>
    );
}