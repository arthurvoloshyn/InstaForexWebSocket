import React, { createContext, FC } from 'react';
import {sortBySymbol} from "../../utils";
import { initState } from '../../reducers/dataFetchReducer';
import useFetchQuotes from '../../hooks/useFetchQuotes';
import {IQuota} from "../../types";
import { Props } from './types';

const initContextValue = {
  ...initState,
  fetchData: () => {},
};

const QuotesContext = createContext(initContextValue);

const QuotesProvider: FC<Props> = ({ children }) => {
  const [{ data: quotes, isLoading, isError }, fetchData] = useFetchQuotes();
  const data: IQuota[] = sortBySymbol(quotes);

  const value = {
    data,
    isError,
    isLoading,
    fetchData,
  };

  return <QuotesContext.Provider value={value}>{children}</QuotesContext.Provider>;
};

export { QuotesContext, QuotesProvider };
