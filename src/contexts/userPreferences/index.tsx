import { createContext, ReactNode, useContext } from 'react';
import { useToggle } from '../../hooks';
import * as MediaLibrary from 'expo-media-library';

export const initialUserPreferencesContext = {
  alarmNotification: false,
  toggleAlarmNotification: () => {},
  darkMode: false,
  toggleDarkMode: () => {},
  addSoundOverlay: false,
  toggleAddSoundOverlay: () => {},
  getUserMediaPermissions: () =>
    Promise.resolve({
      canAskAgain: true,
      status: MediaLibrary.PermissionStatus.UNDETERMINED,
      expires: 'never',
      granted: false,
    } as MediaLibrary.PermissionResponse),
  requestMediaPermissions: () =>
    Promise.resolve({
      canAskAgain: true,
      status: MediaLibrary.PermissionStatus.UNDETERMINED,
      expires: 'never',
      granted: false,
    } as MediaLibrary.PermissionResponse),
};

export interface UserPreferencesContextType {
  alarmNotification: boolean;
  darkMode: boolean;
  toggleDarkMode: (bool?: boolean) => void;
  toggleAlarmNotification: (bool?: boolean) => void;
  addSoundOverlay: boolean;
  toggleAddSoundOverlay: (bool?: boolean) => void;
  getUserMediaPermissions: () => Promise<MediaLibrary.PermissionResponse>;
  requestMediaPermissions: () => Promise<MediaLibrary.PermissionResponse>;
}

export const UserPreferencesContext = createContext<UserPreferencesContextType>(
  {
    alarmNotification: initialUserPreferencesContext.alarmNotification,
    darkMode: initialUserPreferencesContext.darkMode,
    toggleDarkMode: initialUserPreferencesContext.toggleDarkMode,
    toggleAlarmNotification:
      initialUserPreferencesContext.toggleAlarmNotification,
    addSoundOverlay: initialUserPreferencesContext.addSoundOverlay,
    toggleAddSoundOverlay: initialUserPreferencesContext.toggleAddSoundOverlay,
    getUserMediaPermissions:
      initialUserPreferencesContext.getUserMediaPermissions,
    requestMediaPermissions:
      initialUserPreferencesContext.requestMediaPermissions,
  }
);

export const UserPreferencesProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [darkMode, toggleDarkMode] = useToggle(false);
  const [alarmNotification, toggleAlarmNotification] = useToggle(false);
  const [addSoundOverlay, toggleAddSoundOverlay] = useToggle(false);

  const getUserMediaPermissions = () => {
    return MediaLibrary.getPermissionsAsync();
  };

  const requestMediaPermissions = () => {
    return MediaLibrary.requestPermissionsAsync();
  };

  const contextValue: UserPreferencesContextType = {
    darkMode,
    toggleDarkMode,
    alarmNotification,
    toggleAlarmNotification,
    addSoundOverlay,
    toggleAddSoundOverlay,
    getUserMediaPermissions,
    requestMediaPermissions,
  };

  return (
    <UserPreferencesContext.Provider value={contextValue}>
      {children}
    </UserPreferencesContext.Provider>
  );
};

export const useUserPref = () => useContext(UserPreferencesContext);
