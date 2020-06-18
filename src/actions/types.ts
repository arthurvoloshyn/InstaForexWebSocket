import actionTypes from '../constants/actionTypes';
import { IQuote } from '../types';

type IAction<K, V = void> = V extends void ? { type: K } : { type: K } & V;

export type IFetchInit = IAction<actionTypes.FETCH_INIT>;

export type IFetchFailure = IAction<actionTypes.FETCH_FAILURE>;

export type IFetchSuccess = IAction<
  actionTypes.FETCH_SUCCESS,
  { data: IQuote }
>;
