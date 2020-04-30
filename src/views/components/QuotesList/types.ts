import {ListRenderItem} from "react-native";
import {IQuota} from "../../../types";

export type Props = {
    quotes: IQuota[],
};

export type IRenderItem = ListRenderItem<IQuota>;

export type IkeyExtractor = (item: IQuota, index: number) => string;
