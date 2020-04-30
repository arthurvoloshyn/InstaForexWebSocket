import React, {useCallback, FC} from 'react';
import {FlatList} from 'react-native';
import Quote from '../Quote';
import { Props, IRenderItem, IkeyExtractor } from './types';

const QuotesList: FC<Props> = ({quotes}) => {
  const renderItem: IRenderItem = useCallback(({ item }) => <Quote quota={item} />, []);
  const keyExtractor: IkeyExtractor = useCallback(({ symbol }) => symbol, []);

  return (
    <FlatList
      data={quotes}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

export default QuotesList;
