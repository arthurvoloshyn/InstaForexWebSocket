import { StatusBarProps, ViewStyle } from "react-native";

export interface IProps extends StatusBarProps {
    backgroundColor?: string,
}

export type IStyle = {
    statusBar: ViewStyle,
};

export type IStatusBarStyle = {
    backgroundColor: string,
};
