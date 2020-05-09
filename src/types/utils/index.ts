import { IQuotesListItem } from '../lists';

export type IDataListItemValue = string | number;

export interface IDataListItem extends IQuotesListItem {
  value?: IDataListItemValue;
}
