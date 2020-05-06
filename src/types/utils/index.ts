import { IQuotesListItem } from "../../constants/lists/types";

type IValue = string | number;

export interface IDataListItem extends IQuotesListItem {
    value?: IValue;
}
