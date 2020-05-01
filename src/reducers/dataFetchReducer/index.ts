import actionTypes from '../../constants/actionTypes';
import { IReducerState } from '../../types';

export const initState: IReducerState = {
  isLoading: false,
  isError: false,
  data: {},
};

const dataFetchReducer = (state = initState, { type, data }) => {
  switch (type) {
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
          [data.symbol]: data
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
