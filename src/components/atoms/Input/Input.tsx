import { TextInput } from 'react-native';
import { styles } from '../../../styles';

export interface InputProperties {
    value: string;
    onChange: (newText: string) => void;
    placeholder: string,
    round?: boolean,
}

export default function Input (properties : InputProperties) {
    const darkMode = false;
    const { value, onChange, placeholder } = properties;
    return (
        <TextInput
            style={styles.app({...properties, darkMode}).input}
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
        >
        </TextInput>
    );
}