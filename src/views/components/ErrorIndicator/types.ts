import { ReactNode } from 'react';
import { TextStyle, ViewStyle } from 'react-native';

export type IStyle = {
  error: ViewStyle;
  title: TextStyle;
  message: TextStyle;
};

export type IProps = {
  children?: ReactNode;
  message?: string | null;
};
