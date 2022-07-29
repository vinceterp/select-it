import React, { useCallback, useState } from 'react';
import { TouchableOpacity, View, Platform } from 'react-native';
import { COLORS } from '../../../styles';
import { Button, Icon, Input, Label } from '../../atoms';
import * as MediaLibrary from 'expo-media-library';
import * as DocumentPicker from 'expo-document-picker';
import { useAudioContext, useUserPref } from '../../../contexts';
import Modal from 'react-native-modal';
import { useToggle } from '../../../hooks';

export interface Properties {
  closeAddSoundOverlay: () => void;
}

export default function AddSoundPanel({ closeAddSoundOverlay }: Properties) {
  const { darkMode } = useUserPref();
  const { permissions } = useAudioContext();
  const [audioUploaded, setAudioUploaded] = useState<boolean>(false);
  const [errorModalStatus, toggleErrorModal] = useToggle(false);
  const [songTitle, setSongTitle] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>(
    'Please choose an mp3 file'
  );
  // const { OS: platform } = Platform;

  const selectFile = useCallback(async () => {
    const file = await DocumentPicker.getDocumentAsync({
      multiple: false,
      copyToCacheDirectory: false,
    });
    console.info(file);
    if (file.type === 'success') {
      const fileType = file.name.split('.')[1];
      if (fileType === 'mp3') {
        setAudioUploaded(true);
      } else {
        setErrorMessage('Please choose an mp3 file');
        toggleErrorModal(true);
      }
    }
    // if (platform === 'ios') {
    //   const file = await DocumentPicker.getDocumentAsync({ multiple: false });
    //   console.info(file);
    //   if (file.type === 'success') {
    //     const fileType = file.name.split('.')[1];
    //     if (fileType === 'mp3') {
    //       setAudioUploaded(true);
    //     } else {
    //       setErrorMessage('Please choose an mp3 file');
    //       toggleErrorModal(true);
    //     }
    //   }
    // } else if (platform === 'android') {
    //   let assets = await MediaLibrary.getAssetsAsync({ mediaType: 'audio' });
    //   assets = await MediaLibrary.getAssetsAsync({
    //     mediaType: 'audio',
    //     first: assets.totalCount,
    //   });
    //   console.log(assets.assets);
    // }
  }, [toggleErrorModal, setAudioUploaded]);

  const handleChooseFile = useCallback(() => {
    if (permissions && permissions.granted) {
      selectFile();
    } else {
      setErrorMessage('Please give the app permission to access media files');
      toggleErrorModal(true);
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
        <View
          style={{
            display: 'flex',
            width: 145,
            height: 145,
            borderRadius: 15,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 20,
            backgroundColor: COLORS.PRIMARY_GREY,
          }}
        ></View>
        <View
          style={{
            width: '60%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <Input
            placeholder="Tuesday Alarm"
            value={songTitle}
            onChangeText={(newText: string) => setSongTitle(newText)}
          />
        </View>
        <View
          style={{
            height: 70,
            borderWidth: 1,
            borderColor: 'red',
            marginBottom: 20,
          }}
        >
          {/* Trimmer area */}
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            height: 70,
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <View
            style={{
              backgroundColor: COLORS.PRIMARY_BLUE_ACCENT,
              display: 'flex',
              height: 48,
              width: 48,
              borderRadius: 24,
            }}
          >
            <Icon name="Play" fill={COLORS.WHITE} />
          </View>
          <Button
            buttonTheme="primary"
            title="Add Sound"
            icon={<Icon name="AddSound" fill={COLORS.WHITE} />}
            onPress={() => closeAddSoundOverlay()}
          />
        </View>
      </View>
    );
  }, [darkMode, closeAddSoundOverlay, songTitle]);

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
              label={errorMessage}
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
