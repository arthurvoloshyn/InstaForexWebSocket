import { ReactElement } from "react";
import { ListRenderItem } from "react-native";
import { IQuote } from "../../../types";

export type IProps = {
    quotes: IQuote[],
    onRefresh: () => void,
    refreshing: boolean,
};

export type IRenderItem = ListRenderItem<IQuote>;

export type IKeyExtractor = (item: IQuote, index: number) => string;

export type IRenderEmpty = () => ReactElement;
