import actionTypes from '../constants/actionTypes';
import { IQuota, IAction } from '../types';

export const fetchInit = (): IAction => ({ type: actionTypes.FETCH_INIT });
export const fetchSuccess = (data: IQuota): IAction => ({ type: actionTypes.FETCH_SUCCESS, data });
export const fetchFailure = (): IAction => ({ type: actionTypes.FETCH_FAILURE });
