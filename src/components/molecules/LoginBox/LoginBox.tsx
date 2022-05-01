import { useState } from "react";
import { SafeAreaView } from "react-native";
import { styles } from "../../../styles";
import { Input } from "../../atoms";

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
        <SafeAreaView style={styles.app(false).loginBoxContainer}>
            <Input value={username} placeholder={'Username'} onChange={handleUsername} />
            <Input value={password} placeholder={'Password'} onChange={handlePassword} />
        </SafeAreaView>
    );
}