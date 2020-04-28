import { ReactNode } from "react";
import {TextStyle, ViewStyle} from "react-native";

export type Props = {
    children?: ReactNode,
};

export type Style = {
    error: ViewStyle,
    text: TextStyle,
};
