import {IQuote, IQuoteMap} from "../types";

export const sortBySymbol = (data: IQuoteMap): IQuote[] => {
    const dataValues: IQuote[] = Object.values(data);

    return dataValues.sort((a: IQuote, b: IQuote): number => a.symbol.localeCompare(b.symbol));
};
