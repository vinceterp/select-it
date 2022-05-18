import { useState } from "react";
import { View, Text, Image, TouchableHighlight, TouchableOpacity } from "react-native";
import { useBareAuth } from "../../../contexts";
import { COLORS, styles } from "../../../styles";
import { Input, Button } from "../../atoms";

export default function LoginBox () {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const {userData, setUserData} = useBareAuth();
    
    const handleUsername = (newText: string) => {
        setUsername(newText);
    }
    const handlePassword = (newText: string) => {
        setPassword(newText);
    }
    const setFimiToken = (token: string) => {
        setUserData({...userData, token})
    }
    
    return(
        <View style={styles.app(false).loginBoxContainer}>
            <Input value={username} placeholder='Username' onChangeText={handleUsername} />
            <Input value={password} placeholder='Password' onChangeText={handlePassword} secureTextEntry={true} />
            <Button buttonTheme="login" title="Continue" onPress={() => setFimiToken(username)}/>
            <View style={{height: 60, width: '95%', display: 'flex', alignItems:'center', justifyContent: 'center'}} >
                <Text style={{...styles.app({}).buttonText, fontWeight: '700', fontSize: 18}}>or</Text>
            </View>
            <Button icon={<Image style={styles.app({}).smallImage} source={require('../../../assets/google_icon.png')} />} buttonTheme="sso-button" title="Continue with Google" onPress={() => setFimiToken('google')} />
            <Button icon={<Image style={styles.app({}).smallImage} source={require('../../../assets/facebook_icon.png')} />} buttonTheme="sso-button" title="Continue with Facebook" onPress={() => setFimiToken('facebook')} />
            <Text style={styles.app({basicTextColor: COLORS.WHITE}).basicText}>
                Don't have an account? 
                <TouchableOpacity style={{borderWidth: 2, borderColor: 'red'}} onPress={() => console.log('i was pressed')}>
                    <Text style={styles.app({basicTextColor: COLORS.LOGIN_BUTTON_BLUE}).basicText}> Sign up</Text>
                </TouchableOpacity>
            </Text>
        </View>
    );
}