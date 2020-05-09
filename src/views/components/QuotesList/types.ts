import { IQuote } from '../../../types';

export type IProps = {
  quotes: IQuote[];
  onRefresh: () => void;
  refreshing: boolean;
};

export type IRenderItem = { item: IQuote };
