import IReducerState from '../reducer';

export type IFetchData = () => void;

export type IFetchQuotes = [IReducerState, () => IFetchData];
