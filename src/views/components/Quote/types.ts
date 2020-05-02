import { ViewStyle, TextStyle, Animated } from "react-native";
import {IQuote} from "../../../types";

export type IProps = {
    quota: IQuote,
};

export type IStyle = {
    container: ViewStyle,
    textContainer: TextStyle,
    changeFieldContainer: ViewStyle,
    symbol: TextStyle,
    infoText: TextStyle,
    icon: ViewStyle | TextStyle,
};

export type IAnimatedStyle = {
    backgroundColor: Animated.AnimatedInterpolation
}
