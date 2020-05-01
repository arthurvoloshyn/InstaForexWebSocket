import React, { useContext, FC } from 'react';
import {SafeAreaView} from 'react-native';
import Themes from "../../../constants/themes";
import { QuotesContext } from '../../../contextes/quotesContext';
import QuotesList from '../../components/QuotesList';
import ErrorIndicator from "../../components/ErrorIndicator";
import AppLoader from '../../components/AppLoader';
import AppButton from '../../components/AppButton';
import { IContextValue } from '../../../types';
import styles from './styles';

const Quotes: FC = () => {
    const {
        data,
        isError,
        isLoading,
        fetchData,
    } = useContext<IContextValue>(QuotesContext);

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
      <QuotesList quotes={data} />
    </SafeAreaView>
  );
};

export default Quotes;
