import { createContext, ReactNode, useContext, useState } from 'react';

export const initialNavContext = {
  activeScreenIndex: 0,
};

export interface NavContextInterface {
  activeScreenIndex: number;
  setActiveScreenIndex: (index: number) => void;
}

export const NavContext = createContext<NavContextInterface>({
  activeScreenIndex: initialNavContext.activeScreenIndex,
  setActiveScreenIndex: (index: number) => {},
});

export const NavProvider = ({ children }: { children: ReactNode }) => {
  const [activeScreenIndex, setActiveScreenIndex] = useState(
    initialNavContext.activeScreenIndex
  );
  const contextValue: NavContextInterface = {
    activeScreenIndex,
    setActiveScreenIndex,
  };
  return (
    <NavContext.Provider value={contextValue}>{children}</NavContext.Provider>
  );
};

export const useNavContext = () => useContext(NavContext);
