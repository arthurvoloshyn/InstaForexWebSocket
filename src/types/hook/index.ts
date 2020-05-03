import { IReducerState } from "../reducer";

export type IFetchQuotes = [IReducerState, (() => () => void)];
