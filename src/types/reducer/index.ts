import { IQuoteMap } from "../quotes";

export type IReducerState = {
    readonly data: IQuoteMap,
    readonly isLoading: boolean,
    readonly isError: boolean,
};
