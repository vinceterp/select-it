import { createContext, ReactNode, useContext } from 'react';
import { useToggle } from '../../hooks';

export const initialUserPreferencesContext = {
  alarmNotification: false,
  toggleAlarmNotification: () => {},
  darkMode: false,
  toggleDarkMode: () => {},
  addSoundOverlay: false,
  toggleAddSoundOverlay: () => {},
};

export interface UserPreferencesContextType {
  alarmNotification: boolean;
  darkMode: boolean;
  toggleDarkMode: (bool?: boolean) => void;
  toggleAlarmNotification: (bool?: boolean) => void;
  addSoundOverlay: boolean;
  toggleAddSoundOverlay: (bool?: boolean) => void;
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

  const contextValue: UserPreferencesContextType = {
    darkMode,
    toggleDarkMode,
    alarmNotification,
    toggleAlarmNotification,
    addSoundOverlay,
    toggleAddSoundOverlay,
  };

  return (
    <UserPreferencesContext.Provider value={contextValue}>
      {children}
    </UserPreferencesContext.Provider>
  );
};

export const useUserPref = () => useContext(UserPreferencesContext);
