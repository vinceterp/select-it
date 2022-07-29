import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { useUserPref } from '../../../contexts';
import { COLORS, styles } from '../../../styles';

export interface InputProperties extends TextInputProps {
  value: string;
  onChangeText: (newText: string) => void;
  round?: boolean;
}

export default function Input(properties: InputProperties) {
  const { darkMode } = useUserPref();
  return (
    <View style={styles.app({ ...properties, darkMode }).inputContainer}>
      <TextInput
        {...properties}
        placeholderTextColor={`${COLORS.BLACK}30`}
        style={styles.app({ ...properties, darkMode }).input}
      ></TextInput>
    </View>
  );
}
