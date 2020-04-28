import {ReactNode} from "react";
import {TextStyle, ViewStyle} from "react-native";

export type Props = {
    children: ReactNode,
    onPress?: () => void,
    backgroundColor?: string,
    activeOpacity?: number,
};

export type Style = {
    button: ViewStyle,
    text: TextStyle,
};
