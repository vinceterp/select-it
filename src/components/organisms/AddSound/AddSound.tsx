import React, { useCallback, useEffect, useRef, useState } from 'react';

import { ImageBackground } from 'react-native';
import { COLORS, styles } from '../../../styles';
import { useNavContext, useUserPref } from '../../../contexts';
import { AddSoundPanel } from '../../molecules';
import RBSheet from 'react-native-raw-bottom-sheet';
import { NavigationProp } from '@react-navigation/native';

export default function AddSound({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  const { darkMode, addSoundOverlay, toggleAddSoundOverlay } = useUserPref();
  const refRBSheet = useRef<RBSheet>(null);

  const { setActiveScreenIndex } = useNavContext();

  const closeAddSoundOverlay = useCallback(() => {
    navigation.navigate('Home');
    setActiveScreenIndex(0);
    toggleAddSoundOverlay(false);
  }, [navigation, setActiveScreenIndex, toggleAddSoundOverlay]);

  useEffect(() => {
    if (addSoundOverlay) {
      refRBSheet.current?.open();
    } else {
      refRBSheet.current?.close();
    }
  }, [addSoundOverlay]);
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.app({ darkMode }).loginContainer}
      source={require('../../../assets/userBackground_A.png')}
    >
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        animationType="slide"
        onClose={() => {
          if (addSoundOverlay) {
            closeAddSoundOverlay();
          } else {
          }
        }}
        customStyles={{
          container: {
            height: '90%',
            backgroundColor: darkMode ? COLORS.DARK_MODE : '#EEEEEE',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          wrapper: {
            backgroundColor: 'none',
          },
          draggableIcon: {
            backgroundColor: COLORS.SECONDARY_GREY,
          },
        }}
      >
        <AddSoundPanel />
      </RBSheet>
    </ImageBackground>
  );
}
