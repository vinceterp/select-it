import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { styles } from '../../../styles';

export interface InputProperties extends TextInputProps {
    value: string;
    onChangeText: (newText: string) => void;
    placeholder: string,
    round?: boolean,
}

export default function Input (properties : InputProperties) {
    const darkMode = false;
    const { value, onChangeText, placeholder} = properties;
    return (
        <View style={styles.app({...properties, darkMode}).inputContainer}>
            <TextInput
                {...properties}
                style={styles.app({...properties, darkMode}).input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
            >
            </TextInput>
        </View>
    );
}