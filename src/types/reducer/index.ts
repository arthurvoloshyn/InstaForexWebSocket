import { IQuoteMap } from '../quote';

type IReducerState = {
  readonly data: IQuoteMap;
  readonly isLoading: boolean;
  readonly errorMessage: null | string;
};

export default IReducerState;
