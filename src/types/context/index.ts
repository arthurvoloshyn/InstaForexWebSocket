import { IQuote } from "../quote";
import { IFetchData } from "../hook";

type IContextValue = {
    fetchData: () => IFetchData,
    isLoading: boolean,
    isError: boolean,
    data: IQuote[],
};

export default IContextValue;
