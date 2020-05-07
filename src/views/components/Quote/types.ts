import { ViewStyle, TextStyle } from "react-native";
import Themes from '../../../constants/themes';
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
    color?: Themes.dangerColor | Themes.successColor,
};

export type ITextValue = string | number;
