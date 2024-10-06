import React, { createContext, useContext, useState, ReactNode } from 'react';

export enum HomepageMode {
    // eslint-disable-next-line no-unused-vars
    PERSONAL,
    // eslint-disable-next-line no-unused-vars
    PROFESSIONAL
}

interface HomepageModeContextProps {
  mode: HomepageMode | undefined;
  setMode: (_mode: HomepageMode | undefined) => void;
}

const HomepageModeContext = createContext<HomepageModeContextProps | undefined>(undefined);

export const HomepageModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<HomepageMode | undefined>(undefined);

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