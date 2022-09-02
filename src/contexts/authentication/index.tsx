import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import * as Google from 'expo-auth-session/providers/google';

export const initialUserDataContext = {
  email: '',
  token: '',
  username: '',
};

export interface UserDataType {
  token: string;
  username: string;
  email: string;
}

export interface AuthenticationContextType {
  userData: UserDataType;
  setUserData: (value: UserDataType) => void;
  logout: () => void;
  loginWithGoogle: () => void;
}

export const AuthenticationContext = createContext<AuthenticationContextType>({
  userData: initialUserDataContext,
  setUserData: (value: UserDataType) => {},
  logout: () => {},
  loginWithGoogle: () => {},
});

export const AuthenticationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "988184132423-3tgnbdm6177p0rntvujaopqokg31rh0c.apps.googleusercontent.com",
    iosClientId: "988184132423-9loleqi81s7514ed1rc9jo75hppsm2la.apps.googleusercontent.com",
    androidClientId: "988184132423-npda4mhnp20ag92qac9q22mfbqkpatgk.apps.googleusercontent.com",
  });

  const [userData, setUserData] = useState<UserDataType>(
    initialUserDataContext
  );
  

  const loginWithGoogle =  async () => {
    console.log(process.env.IOS_CLIENT_ID);
    try {
      promptAsync();
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    const castResponse = response as any;
    try{
      if (castResponse.authentication.accessToken){
        setUserData((prevUserData) => ({ ...prevUserData, token: castResponse.authentication.accessToken }));
      }
    } catch(e) {
      console.log('cancelled');
    }
    
  }, [response]);

  const logout = () => {
    setUserData({ ...userData, token: '' });
  };
  const contextValue: AuthenticationContextType = {
    userData,
    setUserData,
    logout,
    loginWithGoogle,
  };
  return (
    <AuthenticationContext.Provider value={contextValue}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useBareAuth = () => useContext(AuthenticationContext);
