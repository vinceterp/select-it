import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import * as MediaLibrary from 'expo-media-library';

export const initialAudioContext = {
  playbackObj: {},
  soundObj: null,
  currentAudio: null,
  permissions: {
    canAskAgain: true,
    status: MediaLibrary.PermissionStatus.UNDETERMINED,
    expires: 0,
    granted: false,
    // accessPrivileges: 'none',
  },
};

export interface AudioContextType {
  playbackObj: any;
  soundObj: null | any;
  currentAudio: null | any;
  permissions: MediaLibrary.PermissionResponse | null;
}

export const AudioContext = createContext<AudioContextType>({
  ...initialAudioContext,
});

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [playbackObj, setPlaybackObj] = useState({});
  const [soundObj, setSoundObj] = useState(null);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [permissions, setPermissions] =
    useState<MediaLibrary.PermissionResponse | null>(null);

  const getPermissions = async () => {
    let permissions = await MediaLibrary.getPermissionsAsync();
    if (permissions && !permissions.granted) {
      permissions = await MediaLibrary.requestPermissionsAsync();
    }
    setPermissions(permissions);
  };

  useEffect(() => {
    getPermissions();
  }, []);

  const contextValue: AudioContextType = {
    playbackObj,
    soundObj,
    currentAudio,
    permissions,
  };

  return (
    <AudioContext.Provider value={contextValue}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudioContext = () => useContext(AudioContext);
