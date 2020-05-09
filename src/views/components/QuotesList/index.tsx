import React, { useCallback, FC, ReactElement } from 'react';
import { FlatList } from 'react-native';
import EmptyPage from '../EmptyPage';
import Quote from '../Quote';
import { IQuote } from '../../../types/quote';
import { IProps, IRenderItem } from './types';

const QuotesList: FC<IProps> = ({ quotes, onRefresh, refreshing }) => {
  const renderItem = useCallback(
    ({ item }: IRenderItem): ReactElement => <Quote quote={item} />,
    [],
  );
  const keyExtractor = useCallback(({ symbol }: IQuote): string => symbol, []);
  const renderEmpty = useCallback((): ReactElement => <EmptyPage />, []);

  return (
    <FlatList
      data={quotes}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      onRefresh={onRefresh}
      refreshing={refreshing}
      ListEmptyComponent={renderEmpty}
    />
  );
};

export default QuotesList;
