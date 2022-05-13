import { createContext, ReactNode, useContext, useMemo } from "react";
import { useAsyncStorage } from "../../hooks";

export interface UserDataType {
    token?: string;
    setToken?: (newToken: string) => void;
    username?: string;
    email?: string;
};

export interface AuthenticationContextType {
    userData: UserDataType;
    setUserData: (value: UserDataType) => void;
}

export const AuthenticationContext = createContext<AuthenticationContextType>({
    userData: {
        email: 'my@selectit.com',
        setToken: (token: string) => {

        },
        token: '',
        username: 'janedoe123'
    },
    setUserData: (value: UserDataType) => {}
});

export const AuthenticationProvider = async ({children}: {children: ReactNode}) => {
    const {getStorageItem, setStorageItem} = useAsyncStorage<AuthenticationContextType>();
    const userData= await getStorageItem('userData');
    const setUserData = (val: UserDataType) => setStorageItem('userData', val);
    const contextValue = useMemo(
        (): AuthenticationContextType => ({userData, setUserData}),
        [],
    );
    return <AuthenticationContext.Provider value={contextValue} >{children}</AuthenticationContext.Provider>
};

export const useBareAuth = () => useContext(AuthenticationContext);