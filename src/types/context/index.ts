import { IQuote } from "../quotes";

export type IContextValue = {
    fetchData: () => void,
    isLoading: boolean,
    isError: boolean,
    data: IQuote[],
};
