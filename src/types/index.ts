import { IFetchFailure, IFetchInit, IFetchSuccess } from "../actions/types";

export type IQuote = {
  ask: number,
  bid: number,
  change: number,
  digits: number,
  lasttime: number,
  symbol: string,
};

export type IQuoteMap = { [key: string]: IQuote };

export type IData = { msg: IQuote };

export type IContextValue = {
  fetchData: () => void,
  isLoading: boolean,
  isError: boolean,
  data: IQuote[],
};

export type IReducerState = {
  readonly data: IQuoteMap,
  readonly isLoading: boolean,
  readonly isError: boolean,
};

export type IFetchQuotes = [IReducerState, (() => () => void)];

export type IAction = IFetchInit | IFetchFailure | IFetchSuccess;
