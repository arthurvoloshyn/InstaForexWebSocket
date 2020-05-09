import actionTypes from '../../constants/actionTypes';
import { IReducerState, IAction } from '../../types';

export const initState: IReducerState = {
  isLoading: false,
  isError: false,
  data: {},
};

const dataFetchReducer = (state: IReducerState = initState, action: IAction): IReducerState => {
  switch (action.type) {
    case actionTypes.FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case actionTypes.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: {
          ...state.data,
          [action.data.symbol]: action.data,
        },
      };
    case actionTypes.FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default dataFetchReducer;
