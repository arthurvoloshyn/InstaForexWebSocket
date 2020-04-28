import React, { FC } from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import Files from './src/constants/files';
import { QuotesProvider } from './src/contextes/quotesContext';
import Main from "./src/views/layouts/Main";
import ErrorBoundary from './src/views/components/ErrorBoundary';

const App: FC = () => {
    const [fontsLoaded]: [boolean] = useFonts(Files.fonts);

    if (!fontsLoaded) return <AppLoading />;

    return (
        <ErrorBoundary>
            <QuotesProvider>
                <Main />
            </QuotesProvider>
        </ErrorBoundary>
    );
};

export default App;
