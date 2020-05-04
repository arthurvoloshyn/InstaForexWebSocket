import { IQuoteMap } from "../quote";

export type IReducerState = {
    readonly data: IQuoteMap,
    readonly isLoading: boolean,
    readonly isError: boolean,
};
