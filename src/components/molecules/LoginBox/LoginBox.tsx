import { useState } from "react";
import { View, Text } from "react-native";
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
            <Input value={username} placeholder={'Username'} onChangeText={handleUsername} />
            <Input value={password} placeholder={'Password'} onChangeText={handlePassword} secureTextEntry={true} />
            <Button buttonStyle="login" title="Continue" longButton onPress={()=>{console.info(`username: ${username} password: ${password}`)}}/>
            <View style={{height: 70, width: '95%', display: 'flex', alignItems:'center', justifyContent: 'center'}} >
                <Text style={{fontFamily: "Roboto", fontSize: 20, color: COLORS.WHITE}}>or</Text>
            </View>
            <Button buttonStyle="sso-button" title="Login with Google" longButton renderIcon='google' onPress={() => console.log('login with google')} />
        </View>
    );
}