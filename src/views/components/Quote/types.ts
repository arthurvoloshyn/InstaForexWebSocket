import {ViewStyle, TextStyle} from "react-native";
import {IQuota} from "../../../types";

export type Props = {
    quota: IQuota,
};

export type Style = {
    container: ViewStyle,
    textContainer: TextStyle,
    changeFieldContainer: ViewStyle,
    symbol: TextStyle,
    infoText: TextStyle,
    icon: ViewStyle | TextStyle,
};
