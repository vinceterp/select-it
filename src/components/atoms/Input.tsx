import { SafeAreaView, TextInput } from 'react-native';
import { styles } from '../../styles/styles';

export interface InputProperties {
    value: string;
    onChange: (newText: string) => void;
    placeholder: string
}

export default function Input ({ value, onChange, placeholder } : InputProperties) {
    
    let darkMode = false;
    return (
        <SafeAreaView>
            <TextInput
                style={styles.app(darkMode).input}
                value={value}
                onChangeText={onChange}
                placeholder={placeholder}
            >
            </TextInput>
        </SafeAreaView>
    );
}