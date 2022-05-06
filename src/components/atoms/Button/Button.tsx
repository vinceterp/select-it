import { TouchableOpacity, ButtonProps, Text, Image, View } from 'react-native';
import { COLORS, styles } from '../../../styles';

export interface ButtonProperties extends ButtonProps{
    longButton: boolean;
    buttonStyle?: 'login' | 'sso-button' | 'primary';
    renderIcon?: string;
}

export default function Button(properties: ButtonProperties) {
    const { longButton, buttonStyle, title, renderIcon } = properties;
    const darkMode = false;
    return (longButton ?
        <TouchableOpacity
            style={styles.app({...properties, darkMode, buttonStyle, longButton}).loginButton}
            {...properties}
        >
            <View style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                {
                    renderIcon === 'google' ? 
                        <Image source={require('../../../assets/google_icon.png')} style={{height: 20, width: 20}}/> :
                    // renderIcon === 'facebook' ?
                    //     <Image source={require('../../../assets/facebook_icon')} style={{height: 20, width: 20}} /> :
                    null
                }
                <Text style={{alignContent: 'flex-start' ,color: buttonStyle === 'login' ? COLORS.WHITE : buttonStyle === 'sso-button' ? COLORS.BLACK : COLORS.WHITE}}>{title}</Text>
            </View>
        </TouchableOpacity> : null)
}
