import {ReactNode} from "react";
import {TextStyle, ViewStyle} from "react-native";

export type IProps = {
    children: ReactNode,
    onPress?: () => void,
    backgroundColor?: string,
    activeOpacity?: number,
};

export type IStyle = {
    button: ViewStyle,
    text: TextStyle,
};

export type IButtonStyle = {
    backgroundColor: string,
};
