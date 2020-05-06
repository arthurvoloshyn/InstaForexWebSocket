import { ViewStyle, TextStyle } from "react-native";
import { IQuote } from "../../../types";

export type IProps = {
    quote: IQuote,
};

export type IStyle = {
    container: ViewStyle,
    changeFieldContainer: ViewStyle,
    icon: ViewStyle | TextStyle,
};

export type IChangeStyles = {
    color?: '#8e2b2b' | '#008000',
};

export type ITextValue = string | number;
