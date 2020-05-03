import { StatusBarProps, ViewStyle } from "react-native";

export interface IProps extends StatusBarProps {
    backgroundColor?: string;
    translucent?: boolean;
}

export type IStyle = {
    statusBar: ViewStyle,
};

export type IStatusBarStyle = {
    backgroundColor: string,
};
