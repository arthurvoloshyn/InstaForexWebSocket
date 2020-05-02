import {ReactNode} from "react";
import {StyleProp, TextStyle} from "react-native";

export type IProps = {
    children: ReactNode,
    style?: StyleProp<TextStyle>,
    bold?: boolean,
};

export type ITextStyle = {
    fontFamily: 'roboto-bold' | 'roboto-regular',
};
