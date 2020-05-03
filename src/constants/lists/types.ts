export type ITitle = 'Symbol' | 'Ask' | 'Bid' | 'Change';

export type IQuoteList = { title: ITitle }[];

export type ILists = {
    quoteSymbols: string[],
    quoteList: IQuoteList,
};
