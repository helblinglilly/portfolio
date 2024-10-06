import { getCookie, setCookie, deleteCookie } from '@/helpers/cookies';
import React, { createContext, useContext, useState, ReactNode } from 'react';

export enum HomepageMode {
    // eslint-disable-next-line no-unused-vars
    PERSONAL = "personal",
    // eslint-disable-next-line no-unused-vars
    PROFESSIONAL = "professional"
}


interface HomepageModeContextProps {
  mode: HomepageMode | undefined;
  setMode: (_mode: HomepageMode | undefined) => void;
}

const HomepageModeContext = createContext<HomepageModeContextProps | undefined>(undefined);

export const HomepageModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const COOKIE_NAME = 'homepage-mode';
  const existingRaw = getCookie(COOKIE_NAME) as HomepageMode | undefined;

  const isExistingValid = existingRaw ? Object.values(HomepageMode).includes(existingRaw) : false;

  const [mode, setInternalState] = useState<HomepageMode | undefined>(isExistingValid ? existingRaw : undefined);

  function setMode(newMode: HomepageMode | undefined){
    setInternalState(newMode);

    if (newMode){
      setCookie(COOKIE_NAME, newMode)
    } else {
      deleteCookie(COOKIE_NAME)
    }
  }

  return (
    <HomepageModeContext.Provider value={{ mode, setMode }}>
      {children}
    </HomepageModeContext.Provider>
  );
};

// Step 4: Export the context and provider
export const useHomepageMode = () => {
  const context = useContext(HomepageModeContext);
  if (!context) {
    throw new Error('useHomepageMode must be used within a HomepageModeProvider');
  }
  return context;
};