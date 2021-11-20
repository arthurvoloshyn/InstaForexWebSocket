import { IQuote } from '../quote';
import { IFetchData } from '../hook';

type IContextValue = {
  fetchData: () => IFetchData;
  isLoading: boolean;
  errorMessage: string | null;
  data: IQuote[];
};

export default IContextValue;
