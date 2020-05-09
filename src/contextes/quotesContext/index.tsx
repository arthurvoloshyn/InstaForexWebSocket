import React, { createContext, FC } from 'react';
import { sortBySymbol } from '../../utils';
import { initState } from '../../reducers/dataFetchReducer';
import useFetchQuotes from '../../hooks/useFetchQuotes';
import { IQuote, IContextValue, IFetchQuotes } from '../../types';
import { IProps } from './types';

const initContextValue: IContextValue = {
  ...initState,
  data: [],
  fetchData: () => () => {},
};

const QuotesContext = createContext<IContextValue>(initContextValue);

const QuotesProvider: FC<IProps> = ({ children }) => {
  // eslint-disable-next-line standard/array-bracket-even-spacing
  const [{ data: quotes, isLoading, isError }, fetchData]: IFetchQuotes = useFetchQuotes();
  const data: IQuote[] = sortBySymbol(quotes);

  const value: IContextValue = {
    data,
    isError,
    isLoading,
    fetchData,
  };

  return <QuotesContext.Provider value={value}>{children}</QuotesContext.Provider>;
};

export { QuotesContext, QuotesProvider };
