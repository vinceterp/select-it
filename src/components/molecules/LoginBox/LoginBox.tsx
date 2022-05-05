import { useState } from "react";
import { View } from "react-native";
import { styles } from "../../../styles";
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
            <Button title="Continue" onPress={()=>{console.info('trigger retrieve access token')}}/>
        </View>
    );
}