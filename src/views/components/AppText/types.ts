import { ReactNode } from "react";
import { TextProps } from "react-native";

export interface IProps extends TextProps {
    children: ReactNode,
    bold?: boolean,
}

export type ITextStyle = {
    fontFamily: 'roboto-bold' | 'roboto-regular',
};
