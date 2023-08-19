import React from 'react';
import BottomSheet from './BottomSheet';
import { BottomSheetContext } from './BottomSheetContext';

interface BottomSheetProviderProps {
  children: React.ReactNode;
}

const BottomSheetProvider = ({ children }: BottomSheetProviderProps) => {
  return (
    <BottomSheetContext.Provider value={{}}>
      <>{children}</>
      <BottomSheet />
    </BottomSheetContext.Provider>
  );
};

export { BottomSheetProvider };
