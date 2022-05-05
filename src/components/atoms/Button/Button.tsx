import { TouchableOpacity, ButtonProps, Text } from 'react-native';
import { COLORS } from '../../../styles';

export interface ButtonProperties extends ButtonProps{
}

export default function Button(properties: ButtonProperties) {
    return (
        <TouchableOpacity
            style={{width: '100%', height: 45, backgroundColor: COLORS.LOGIN_BUTTON_BLUE, borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}
            {...properties}
        >
            <Text style={{color: COLORS.WHITE}}>Continue</Text>
        </TouchableOpacity>
    )
}