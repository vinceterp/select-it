import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { COLORS, styles } from '../../../styles';

export interface InputProperties extends TextInputProps {
    value: string;
    onChangeText: (newText: string) => void;
    round?: boolean,
}

export default function Input (properties : InputProperties) {
    const darkMode = false;
    const { value, onChangeText} = properties;
    return (
        <View style={styles.app({...properties, darkMode}).inputContainer}>
            <TextInput
                {...properties}
                placeholderTextColor={`${COLORS.BLACK}30`}
                style={styles.app({...properties, darkMode}).input}
                value={value}
                onChangeText={onChangeText}
            >
            </TextInput>
        </View>
    );
}