import React, { createContext, useContext, useState } from 'react';

export interface QuoteInitialData {
  category?: string;
  model?: string;
  notes?: string;
}

interface QuoteModalContextType {
  isOpen: boolean;
  openQuoteModal: (data?: QuoteInitialData) => void;
  closeQuoteModal: () => void;
  initialData: QuoteInitialData;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export const QuoteModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialData, setInitialData] = useState<QuoteInitialData>({});

  const openQuoteModal = (data?: QuoteInitialData) => {
    setInitialData(data || {});
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
  };

  return (
    <QuoteModalContext.Provider
      value={{
        isOpen,
        openQuoteModal,
        closeQuoteModal,
        initialData,
      }}
    >
      {children}
    </QuoteModalContext.Provider>
  );
};

export const useQuoteModal = (): QuoteModalContextType => {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error('useQuoteModal must be used within a QuoteModalProvider');
  }
  return context;
};
