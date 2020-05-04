import { IReducerState } from "../reducer";

export type IReturnFetchData = () => void;

export type IFetchQuotes = [IReducerState, (() => IReturnFetchData)];
