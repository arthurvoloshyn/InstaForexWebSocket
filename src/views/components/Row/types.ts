import { TextStyle, ViewStyle } from "react-native";
import Themes from "../../../constants/themes";
import { IDataListItem } from "../../../types";

export interface IProps extends IDataListItem {
    isNegative: boolean,
}

export type IStyle = {
    textContainer: ViewStyle,
    symbol: TextStyle,
    infoText: TextStyle,
};

export type IChangeStyles = {
    color?: Themes.dangerColor | Themes.successColor,
};
