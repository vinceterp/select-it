import React, { useCallback } from 'react';
import { View } from 'react-native';
import { COLORS } from '../../../styles';
import { Button, Icon } from '../../atoms';
import * as DocumentPicker from 'expo-document-picker';

export default function AddSoundPanel() {
  const selectFile = useCallback(async () => {
    const file = await DocumentPicker.getDocumentAsync({ multiple: false });
    if (file.type === 'success') {
    } else if (file.type === 'cancel') {
    }
  }, []);

  return (
    <View
      style={{
        height: '90%',
        padding: '5%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button
        buttonTheme="primary"
        icon={<Icon name="Plus" fill={COLORS.WHITE} />}
        title="Choose file"
        onPress={() => selectFile()}
      />
    </View>
  );
}
