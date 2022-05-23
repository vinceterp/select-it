import { createContext, ReactNode, useContext, useState } from 'react'

export const initialUserDataContext = {
  email: '',
  token: '',
  username: '',
}

export interface UserDataType {
  token: string
  username: string
  email: string
}

export interface AuthenticationContextType {
  userData: UserDataType
  setUserData: (value: UserDataType) => void
}

export const AuthenticationContext = createContext<AuthenticationContextType>({
  userData: initialUserDataContext,
  setUserData: (value: UserDataType) => {},
})

export const AuthenticationProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [userData, setUserData] = useState<UserDataType>(initialUserDataContext)
  const contextValue: AuthenticationContextType = { userData, setUserData }
  return (
    <AuthenticationContext.Provider value={contextValue}>
      {children}
    </AuthenticationContext.Provider>
  )
}

export const useBareAuth = () => useContext(AuthenticationContext)
