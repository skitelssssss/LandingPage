import { createContext, useState, useCallback } from 'react';
import PrivacyPolicyModal from '../views/landing/Privacy/PrivacyPolicyModal';

export const PrivacyContext = createContext();

export function PrivacyProvider({ children }) {
  const [open, setOpen] = useState(false);

  const openPrivacyModal = useCallback(() => {
    setOpen(true)
  });

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <PrivacyContext.Provider value={{ openPrivacyModal }}> // раздает value все обернутым в него 
      {children} 
      <PrivacyPolicyModal open={open} onClose={handleClose} />
    </PrivacyContext.Provider>
  );
}