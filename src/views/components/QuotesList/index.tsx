import React, {useCallback, FC} from 'react';
import {FlatList} from 'react-native';
import {IQuota} from '../../../types';
import Quote from '../Quote';
import { Props } from './types';

const QuotesList: FC<Props> = ({quotes}) => {
  const renderItem = useCallback(({item}: {item: IQuota}) => <Quote quota={item} />, []);
  const keyExtractor = useCallback(({ symbol }) => symbol, []);

  return (
    <FlatList
      data={quotes}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

export default QuotesList;
