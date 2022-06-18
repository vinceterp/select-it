import React, { useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavContext, useUserPref } from '../../../contexts';
import { Route } from '../../../routes';
import { COLORS, styles } from '../../../styles';
import { Icon, Label } from '../../atoms';

const renderNavIcon = (
  routeName: string,
  darkMode: boolean,
  isFocused: boolean
) => {
  switch (routeName) {
    case 'Home':
      return (
        <Icon
          name="Home"
          fill={
            isFocused
              ? COLORS.SECONDARY_BLUE
              : darkMode
              ? COLORS.WHITE
              : COLORS.SECONDARY_GREY
          }
        />
      );
    case 'Add Sound':
      return (
        <Icon
          name="AddSound"
          fill={
            isFocused
              ? COLORS.SECONDARY_BLUE
              : darkMode
              ? COLORS.WHITE
              : COLORS.SECONDARY_GREY
          }
        />
      );
    case 'Help':
      return (
        <Icon
          name="Help"
          fill={
            isFocused
              ? COLORS.SECONDARY_BLUE
              : darkMode
              ? COLORS.WHITE
              : COLORS.SECONDARY_GREY
          }
        />
      );
    case 'Settings':
      return (
        <Icon
          name="Settings"
          fill={
            isFocused
              ? COLORS.SECONDARY_BLUE
              : darkMode
              ? COLORS.WHITE
              : COLORS.SECONDARY_GREY
          }
        />
      );
  }
};

export interface Properties {
  navigation?: any;
  authenticatedRoute: any;
}

export default function BottomNavBar({
  authenticatedRoute,
  ...rest
}: Properties) {
  const { darkMode, addSoundOverlay, toggleAddSoundOverlay } = useUserPref();
  const { activeScreenIndex, setActiveScreenIndex } = useNavContext();
  const { navigation } = rest;
  const showAddSoundOverlay = () => toggleAddSoundOverlay(true);

  const onNavPress = useCallback(
    (index: number, route: string) => {
      setActiveScreenIndex(index);
      navigation?.navigate(route, {});
      if (route === 'Add Sound' && !addSoundOverlay) {
        showAddSoundOverlay();
      } else {
        toggleAddSoundOverlay(false);
      }
    },
    [setActiveScreenIndex, toggleAddSoundOverlay, addSoundOverlay]
  );

  const renderNavItems = useCallback(() => {
    return authenticatedRoute.map((route: Route, index: number) => {
      const isFocused = activeScreenIndex === index;
      return (
        <TouchableOpacity
          key={`navItem${index}`}
          onPress={() => onNavPress(index, route.name)}
          style={styles.app({}).bottomNavButton}
        >
          {renderNavIcon(route.name, darkMode, isFocused)}
          <Label
            label={route.name}
            size="XS"
            color={
              isFocused
                ? COLORS.SECONDARY_BLUE
                : darkMode
                ? COLORS.WHITE
                : COLORS.SECONDARY_GREY
            }
          />
        </TouchableOpacity>
      );
    });
  }, [addSoundOverlay, darkMode, activeScreenIndex, onNavPress, navigation]);

  return (
    <View style={styles.app({ darkMode }).bottomNavBar}>
      {renderNavItems()}
    </View>
  );
}
