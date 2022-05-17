import { useState } from "react";
import { View, Text, Image } from "react-native";
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
                <Text style={{fontFamily: "Roboto", fontSize: 20, color: COLORS.WHITE}}>or</Text>
            </View>
            <Button icon={<Image style={styles.app({}).smallImage} source={require('../../../assets/google_icon.png')} />} buttonTheme="sso-button" title="Login with Google" onPress={() => setFimiToken('google')} />
            <Button icon={<Image style={styles.app({}).smallImage} source={require('../../../assets/facebook_icon.png')} />} buttonTheme="sso-button" title="Login with Facebook" onPress={() => setFimiToken('facebook')} />
        </View>
    );
}