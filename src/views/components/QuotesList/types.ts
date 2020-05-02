import { ReactElement } from "react";
import { ListRenderItem } from "react-native";
import { IQuota } from "../../../types";

export type IProps = {
    quotes: IQuota[],
    onRefresh: () => void,
    refreshing: boolean,
};

export type IRenderItem = ListRenderItem<IQuota>;

export type IKeyExtractor = (item: IQuota, index: number) => string;

export type IRenderEmpty = () => ReactElement;
