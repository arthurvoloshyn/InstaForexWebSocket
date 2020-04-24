export type IQuota = {
  ask: number;
  bid: number;
  change: number;
  digits: number;
  lasttime: number;
  symbol: string;
};

export type IQuotaMap = {[key: string]: IQuota | {}};

export type IData = {msg: IQuota};
