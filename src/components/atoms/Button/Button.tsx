import { ReactNode } from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, View} from 'react-native';
import { COLORS, styles } from '../../../styles';

export interface ButtonProperties extends TouchableOpacityProps{
    buttonTheme: 'login' | 'sso-button' | 'primary';
    title: string
    icon?: ReactNode;
}

export default function Button(properties: ButtonProperties) {
    const { buttonTheme, title, icon} = properties;
    const darkMode = false;

    switch(buttonTheme) {
        case 'login':
            return (
                <TouchableOpacity
                    style={styles.app({...properties, darkMode}).loginButton}
                    {...properties}
                >
                    <Text style={styles.app({darkMode, buttonTheme}).buttonText}>{title}</Text>
                </TouchableOpacity>
            );
        case 'sso-button':
            return (
                <TouchableOpacity
                    style={styles.app({...properties, darkMode}).ssoButton}
                    {...properties}
                >
                    <View style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <View style={styles.app({}).buttonIconContainer}>
                            {icon}
                        </View>
                        <Text style={styles.app({darkMode, buttonTheme}).buttonText}>{title}</Text>
                    </View>
                </TouchableOpacity>
            );
        case 'primary':
            return (<></>);
        default:
            //return primary button here
            return (<></>);
    }
}
