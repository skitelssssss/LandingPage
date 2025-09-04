import { createContext, useState, useContext } from 'react';

const PrivacyContext = createContext();

export const usePrivacyModal = () => {
  const context = useContext(PrivacyContext);
  if (!context) {
    throw new Error;
  }
  return context;
};

export const PrivacyProvider = ({ children }) => {
  const [isPrivacyOpen, setPrivacyOpen] = useState(false);

  const openPrivacy = () => setPrivacyOpen(true);
  const closePrivacy = () => setPrivacyOpen(false);

  return (
    <PrivacyContext.Provider
      value={{
        isPrivacyOpen,
        openPrivacy,
        closePrivacy,
      }}
    >
      {children}
    </PrivacyContext.Provider>
  );
};