import React, { useCallback, FC } from 'react';
import { FlatList } from 'react-native';
import EmptyPage from '../EmptyPage';
import Quote from '../Quote';
import { IProps, IRenderItem, IKeyExtractor, IRenderEmpty } from './types';

const QuotesList: FC<IProps> = ({ quotes, onRefresh, refreshing }) => {
  const renderItem: IRenderItem = useCallback(({ item }) => <Quote quota={item} />, []);
  const keyExtractor: IKeyExtractor = useCallback(({ symbol }) => symbol, []);
  const renderEmpty: IRenderEmpty = useCallback(() => <EmptyPage />, []);

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
