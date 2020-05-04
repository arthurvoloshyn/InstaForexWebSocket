import { IQuote } from "../quote";

export type IContextValue = {
    fetchData: () => void,
    isLoading: boolean,
    isError: boolean,
    data: IQuote[],
};
