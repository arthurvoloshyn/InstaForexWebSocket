import { ReactNode } from 'react';
import {
  TextStyle,
  ViewStyle,
  TouchableNativeFeedbackProps,
  TouchableOpacityProps,
} from 'react-native';

export interface ITouchableProps
  extends TouchableNativeFeedbackProps,
    TouchableOpacityProps {}

export interface IProps extends ITouchableProps {
  children: ReactNode;
  backgroundColor?: string;
}

export type IStyle = {
  button: ViewStyle;
  text: TextStyle;
};

export type IButtonStyle = {
  backgroundColor: string;
};
