import { StatusBarStyle, ViewStyle } from "react-native";

export type IProps = {
    backgroundColor?: string,
    translucent?: boolean,
    barStyle?: StatusBarStyle,
};

export type IStyle = {
    statusBar: ViewStyle,
};

export type IStatusBarStyle = {
    backgroundColor: string,
};
