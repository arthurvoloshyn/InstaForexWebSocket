import React, {useEffect, useState} from 'react';
import io from 'socket.io-client';
import {SafeAreaView} from 'react-native';

import {IQuotaMap, IData, IQuota} from '../../types';
import {QuotesList} from './List';
import styles from './styles';

const quoteSymbols = [
    'GOLD',
    'EURUSD',
    'GBPUSD',
    'USDJPY',
    'USDCHF',
    'USDCAD',
    'AUDUSD',
];

export const Quotes = () => {
  const [quotesMap, setQuotesMap] = useState<IQuotaMap>({});

  useEffect(() => {
    const client = io('https://qrtm1.ifxid.com:8443');

    client.on('connect', () => {
        client.emit('subscribe', quoteSymbols);
    });

    client.on('disconnect', () => {
        client.emit('unsubscribe', quoteSymbols);
    });

    client.on('quotes', (data: IData) => {
      setQuotesMap((prevState) => ({
        ...prevState,
        [data.msg.symbol]: data.msg,
      }));
    });

    return () => {
      client.close();
    };
  }, []);

  const quotes: IQuota[] = Object.values(quotesMap).sort(
    (a: IQuota, b: IQuota) => b.bid - a.bid,
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <QuotesList quotes={quotes} />
    </SafeAreaView>
  );
};
