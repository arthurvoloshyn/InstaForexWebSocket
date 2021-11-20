import actionTypes from '../../constants/actionTypes';
import { IReducerState, IAction } from '../../types';

export const initState: IReducerState = {
  isLoading: false,
  errorMessage: null,
  data: {},
};

const dataFetchReducer = (
  state: IReducerState = initState,
  action: IAction,
): IReducerState => {
  switch (action.type) {
    case actionTypes.FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      };
    case actionTypes.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        data: {
          ...state.data,
          [action.data.symbol]: action.data,
        },
      };
    case actionTypes.FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};

export default dataFetchReducer;
