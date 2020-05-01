import {ListRenderItem} from "react-native";
import {IQuota} from "../../../types";

export type IProps = {
    quotes: IQuota[],
};

export type IRenderItem = ListRenderItem<IQuota>;

export type IKeyExtractor = (item: IQuota, index: number) => string;
