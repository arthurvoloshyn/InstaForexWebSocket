import { ReactNode } from "react";
import { TextStyle, ViewStyle, TouchableNativeFeedbackProps, TouchableOpacityProps } from "react-native";

export interface IProps extends TouchableNativeFeedbackProps, TouchableOpacityProps {
    children: ReactNode,
    backgroundColor?: string,
}

export type IStyle = {
    button: ViewStyle,
    text: TextStyle,
};

export type IButtonStyle = {
    backgroundColor: string,
};
