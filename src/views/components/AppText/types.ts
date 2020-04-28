import {ReactNode} from "react";
import {StyleProp, TextStyle} from "react-native";

export type Props = {
    children: ReactNode,
    style?: StyleProp<TextStyle>,
    bold?: boolean,
};
