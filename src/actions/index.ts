import actionTypes from '../constants/actionTypes';
import { IQuote, IAction } from '../types';

export const fetchInit = (): IAction => ({ type: actionTypes.FETCH_INIT });
export const fetchSuccess = (data: IQuote): IAction => ({ type: actionTypes.FETCH_SUCCESS, data });
export const fetchFailure = (): IAction => ({ type: actionTypes.FETCH_FAILURE });
