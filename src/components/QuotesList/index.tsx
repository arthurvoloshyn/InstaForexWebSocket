import React, {useCallback} from 'react';
import {FlatList} from 'react-native';

import {IQuota} from '../../types';
import Quote from '../Quote';

type Props = {
  quotes: IQuota[];
};

const QuotesList = ({quotes}: Props) => {
  const renderItem = useCallback(({item}: {item: IQuota}) => <Quote quota={item} />, []);
  const keyExtractor = useCallback((item) => item.symbol, []);

  return (
    <FlatList
      data={quotes}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

export default QuotesList;
