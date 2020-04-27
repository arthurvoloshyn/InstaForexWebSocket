import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';
import {sortBySymbol} from "../../utils";
import useFetchQuotes from "../../hooks/useFetchQuotes";
import {QuotesList} from './List';
import {IQuota} from "../../types";
import styles from './styles';

const Quotes: FC = () => {
    const [{ data }, fetchData] = useFetchQuotes();
    const quotes: IQuota[] = sortBySymbol(data);

  return (
    <SafeAreaView style={styles.safeArea}>
      <QuotesList quotes={quotes} />
    </SafeAreaView>
  );
};

export default Quotes;
