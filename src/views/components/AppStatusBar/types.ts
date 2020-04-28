import {StatusBarStyle, ViewStyle} from "react-native";

export type Props = {
    backgroundColor?: string,
    translucent?: boolean,
    barStyle?: StatusBarStyle,
};

export type Style = {
    statusBar: ViewStyle,
};
