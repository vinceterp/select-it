import React, { useEffect, useRef, useState } from 'react';

import { ImageBackground } from 'react-native';
import { COLORS, styles } from '../../../styles';
import { useUserPref } from '../../../contexts';
import { AddSoundPanel } from '../../molecules';
import RBSheet from 'react-native-raw-bottom-sheet';
import { NavigationProp } from '@react-navigation/native';

export default function AddSound({activeScreenIndex, navigation}: {activeScreenIndex: number, navigation: NavigationProp<any>}) {

  const { darkMode, addSoundOverlay } = useUserPref();
  const refRBSheet = useRef<RBSheet>(null);

  useEffect(() => {
    if (addSoundOverlay) {
      refRBSheet.current?.open();
    }else{
      refRBSheet.current?.close();
    }
  }, [addSoundOverlay]);
  console.log(activeScreenIndex)
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.app({ darkMode }).loginContainer}
      source={require('../../../assets/userBackground_A.png')}
    >
      {/* <View style={{ width: '100%', padding: '5%', height: '80%' }}></View> */}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        animationType="fade"
        onClose={() => {
          if (addSoundOverlay){
            navigation.navigate("Home");
          }else{
            console.log('close')

          }
        }}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: COLORS.SECONDARY_GREY
          }
        }}
      >
        <AddSoundPanel />
      </RBSheet>
    </ImageBackground>
  );
}
