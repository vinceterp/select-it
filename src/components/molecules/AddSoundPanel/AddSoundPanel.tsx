import React, { useCallback, useState } from 'react';
import { TouchableOpacity, View, Platform } from 'react-native';
import { COLORS } from '../../../styles';
import { Button, Icon, Label } from '../../atoms';
import * as MediaLibrary from 'expo-media-library';
import * as DocumentPicker from 'expo-document-picker';
import { useUserPref } from '../../../contexts';
import Modal from 'react-native-modal';
import { useToggle } from '../../../hooks';

export interface Properties {
  closeAddSoundOverlay: () => void;
}

export default function AddSoundPanel({ closeAddSoundOverlay }: Properties) {
  const { darkMode, getUserMediaPermissions, requestMediaPermissions } =
    useUserPref();
  const [audioUploaded, setAudioUploaded] = useState<boolean>(false);
  const [errorModalStatus, toggleErrorModal] = useToggle(false);
  let { OS: platform } = Platform;

  const selectFile = useCallback(async () => {
    if (platform === 'ios') {
      const file = await DocumentPicker.getDocumentAsync({ multiple: false });
      console.info(file);
      if (file.type === 'success') {
        const fileType = file.name.split('.')[1];
        if (fileType === 'mp3') {
          setAudioUploaded(true);
        } else {
          toggleErrorModal(true);
        }
      }
    } else if (platform === 'android') {
      let assets = await MediaLibrary.getAssetsAsync({ mediaType: 'audio' });
      assets = await MediaLibrary.getAssetsAsync({
        mediaType: 'audio',
        first: assets.totalCount,
      });
      console.log(assets.assets.length);
    }
  }, [toggleErrorModal, setAudioUploaded]);

  const handleChooseFile = useCallback(async () => {
    const permissions = await getUserMediaPermissions();
    console.info(permissions);
    if (!permissions.granted) {
      const { status } = await requestMediaPermissions();
      if (status === 'granted') {
        selectFile();
      }
    }
    if (permissions.granted) {
      selectFile();
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
        //This is where the trimmer will be
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
      <Modal isVisible={errorModalStatus} useNativeDriver>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <View
            style={{
              backgroundColor: darkMode ? COLORS.DARK_MODE : COLORS.WHITE,
              height: 'auto',
              padding: '5%',
              width: '80%',
              borderRadius: 15,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Label
              label="Please choose an mp3 file"
              size="M"
              color={darkMode ? COLORS.WHITE : COLORS.SECONDARY_GREY}
            />
            <TouchableOpacity onPress={() => toggleErrorModal(false)}>
              <Label label="Close" size="M" color="red" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {!audioUploaded ? (
        <Button
          buttonTheme="primary"
          icon={<Icon name="Plus" fill={COLORS.WHITE} />}
          title="Choose Mp3"
          onPress={() => handleChooseFile()}
        />
      ) : (
        renderAddSoundPanel()
      )}
    </View>
  );
}
