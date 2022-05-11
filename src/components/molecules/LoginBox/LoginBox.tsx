import { useState } from "react";
import { View, Text, Image } from "react-native";
import { COLORS, styles } from "../../../styles";
import { Input, Button } from "../../atoms";

export default function LoginBox () {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleUsername = (newText: string) => {
        setUsername(newText);
    }
    const handlePassword = (newText: string) => {
        setPassword(newText);
    }
    return(
        <View style={styles.app(false).loginBoxContainer}>
            <Input value={username} placeholder='Username' onChangeText={handleUsername} />
            <Input value={password} placeholder='Password' onChangeText={handlePassword} secureTextEntry={true} />
            <Button buttonTheme="login" title="Continue" onPress={()=>{console.info(`username: ${username} password: ${password}`)}}/>
            <View style={{height: 60, width: '95%', display: 'flex', alignItems:'center', justifyContent: 'center'}} >
                <Text style={{fontFamily: "Roboto", fontSize: 20, color: COLORS.WHITE}}>or</Text>
            </View>
            <Button icon={<Image style={styles.app({}).smallImage} source={require('../../../assets/google_icon.png')} />} buttonTheme="sso-button" title="Login with Google" onPress={() => console.log('login with google')} />
            <Button icon={<Image style={styles.app({}).smallImage} source={require('../../../assets/facebook_icon.png')} />} buttonTheme="sso-button" title="Login with Facebook" onPress={() => console.log('login with facebook')} />
        </View>
    );
}