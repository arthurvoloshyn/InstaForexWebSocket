import actionTypes from "../constants/actionTypes";

export type IQuota = {
  ask: number,
  bid: number,
  change: number,
  digits: number,
  lasttime: number,
  symbol: string,
};

export type IQuotaMap = { [key: string]: IQuota };

export type IData = { msg: IQuota };

export type IContextValue = {
  fetchData: () => void,
  isLoading: boolean,
  isError: boolean,
  data: IQuota[],
};

export type IReducerState = {
  readonly data: IQuotaMap,
  readonly isLoading: boolean,
  readonly isError: boolean,
};

export type IFetchQuotes = [IReducerState, (() => () => void)];

export type IAction = {
  type: actionTypes,
  data?: IQuota,
};
