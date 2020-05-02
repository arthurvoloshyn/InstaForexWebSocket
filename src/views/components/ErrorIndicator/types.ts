import { ReactNode } from "react";
import { TextStyle, ViewStyle } from "react-native";

export type IProps = {
    children?: ReactNode,
};

export type IStyle = {
    error: ViewStyle,
    text: TextStyle,
};
