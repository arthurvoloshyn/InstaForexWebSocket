import { IQuoteMap } from '../quote';

type IReducerState = {
  readonly data: IQuoteMap;
  readonly isLoading: boolean;
  readonly isError: boolean;
};

export default IReducerState;
