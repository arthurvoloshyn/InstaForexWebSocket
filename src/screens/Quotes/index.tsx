import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';
import Themes from "../../constants/themes";
import {sortBySymbol} from "../../utils";
import useFetchQuotes from "../../hooks/useFetchQuotes";
import {QuotesList} from './List';
import {IQuota} from "../../types";
import ErrorIndicator from "../../components/ErrorIndicator";
import AppLoader from '../../components/AppLoader';
import AppButton from '../../components/AppButton';
import styles from './styles';

const Quotes: FC = () => {
    const [{ data, isLoading, isError }, fetchData] = useFetchQuotes();
    const quotes: IQuota[] = sortBySymbol(data);

    if (isError) {
        return (
            <ErrorIndicator>
                <AppButton backgroundColor={Themes.dangerColor} onPress={fetchData}>
                    Try again
                </AppButton>
            </ErrorIndicator>
        );
    }

    if (isLoading) return <AppLoader />;

  return (
    <SafeAreaView style={styles.safeArea}>
      <QuotesList quotes={quotes} />
    </SafeAreaView>
  );
};

export default Quotes;
