import { ComponentType } from 'react';

export interface BottomSheetItem {
  name: string;
  component: ComponentType<any>;
}
