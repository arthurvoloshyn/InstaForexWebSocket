import React, {useCallback, FC} from 'react';
import {FlatList} from 'react-native';
import Quote from '../Quote';
import { IProps, IRenderItem, IKeyExtractor } from './types';

const QuotesList: FC<IProps> = ({quotes}) => {
  const renderItem: IRenderItem = useCallback(({ item }) => <Quote quota={item} />, []);
  const keyExtractor: IKeyExtractor = useCallback(({ symbol }) => symbol, []);

  return (
    <FlatList
      data={quotes}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

export default QuotesList;
