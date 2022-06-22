import React, { useCallback, useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { COLORS } from '../../../styles';
import { Button, Icon, Label } from '../../atoms';
import * as DocumentPicker from 'expo-document-picker';
import { useUserPref } from '../../../contexts';
import Modal from 'react-native-modal';
import { useToggle } from '../../../hooks';

export interface Properties {
  closeAddSoundOverlay: () => void;
}

export default function AddSoundPanel({ closeAddSoundOverlay }: Properties) {
  const { darkMode } = useUserPref();
  const [audioUploaded, setAudioUploaded] = useState<boolean>(false);
  const [errorModalStatus, toggleErrorModal] = useToggle(false);

  const selectFile = useCallback(async () => {
    const file = await DocumentPicker.getDocumentAsync({ multiple: false });
    if (file.type === 'success') {
      const fileType = file.name.split('.')[1];
      if (fileType === 'mp3') {
        setAudioUploaded(true);
      } else {
        toggleErrorModal(true);
      }
    }
  }, []);

  const renderAddSoundPanel = useCallback(() => {
    return (
      <View style={{ flex: 1, width: '100%' }}>
        <View
          style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '5%',
          }}
        >
          <Label
            size="M"
            label="Add Sound"
            color={darkMode ? COLORS.WHITE : COLORS.SECONDARY_GREY}
          />
          <TouchableOpacity onPress={() => closeAddSoundOverlay()}>
            <Label size="M" label="Cancel" color={COLORS.LINK_FILL} underline />
          </TouchableOpacity>
        </View>
      </View>
    );
  }, [darkMode, closeAddSoundOverlay]);

  return (
    <View
      style={{
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Modal isVisible={errorModalStatus}>
        <View style={{ flex: 1 }}>
          <Text onPress={() => toggleErrorModal(false)}>
            I am the modal content!
          </Text>
        </View>
      </Modal>
      {!audioUploaded ? (
        <Button
          buttonTheme="primary"
          icon={<Icon name="Plus" fill={COLORS.WHITE} />}
          title="Choose file"
          onPress={() => selectFile()}
        />
      ) : (
        renderAddSoundPanel()
      )}
    </View>
  );
}
