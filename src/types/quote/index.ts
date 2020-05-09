export type IQuote = {
  ask: number;
  bid: number;
  change: number;
  digits: number;
  lasttime: number;
  symbol: string;
};

export type IQuoteMap = { [key: string]: IQuote };

export type IData = { msg: IQuote };
