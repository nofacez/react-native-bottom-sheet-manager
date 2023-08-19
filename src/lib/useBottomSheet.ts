import React from 'react';
import { BottomSheetContext } from './BottomSheetContext';

export const useBotttomSheet = () => {
  const ctx = React.useContext(BottomSheetContext);
  return ctx;
};
