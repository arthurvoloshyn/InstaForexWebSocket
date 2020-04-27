import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';
import useFetchQuotes from "../../hooks/useFetchQuotes";
import {QuotesList} from './List';
import styles from './styles';

const Quotes: FC = () => {
    const [quotes, fetchData] = useFetchQuotes();

  return (
    <SafeAreaView style={styles.safeArea}>
      <QuotesList quotes={quotes} />
    </SafeAreaView>
  );
};

export default Quotes;
