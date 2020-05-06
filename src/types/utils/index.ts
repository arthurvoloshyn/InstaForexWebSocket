import { IQuotesListItem } from '../lists';

type IValue = string | number;

export interface IDataListItem extends IQuotesListItem {
    value?: IValue;
}
