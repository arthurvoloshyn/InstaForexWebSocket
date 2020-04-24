import React, {useCallback} from 'react';
import {FlatList} from 'react-native';

import {IQuota} from '../../types';
import {ListItem} from './ListItem';

type Props = {
  quotes: IQuota[];
};

export const QuotesList = ({quotes}: Props) => {
  const renderItem = useCallback(({item}: {item: IQuota}) => {
    return <ListItem quota={item} />;
  }, []);

  const keyExtractor = useCallback((item) => item.symbol, []);

  return (
    <FlatList
      data={quotes}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};
