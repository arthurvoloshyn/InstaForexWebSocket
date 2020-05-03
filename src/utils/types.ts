import { IQuoteList, ITitle } from "../constants/lists/types";

type IValue = string | number;

export type IDataListItem = { title: ITitle, value: IValue };

export type IDataList = IQuoteList | IDataListItem[];
