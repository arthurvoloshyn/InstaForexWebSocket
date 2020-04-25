import React, {FC} from 'react';
import {StatusBar} from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import Files from './src/constants/files';
import Quotes from './src/screens/Quotes';
import ErrorBoundary from './src/components/ErrorBoundary';

const App: FC = () => {
    const [fontsLoaded] = useFonts(Files.fonts);

    if (!fontsLoaded) return <AppLoading />;

    return (
        <ErrorBoundary>
            <StatusBar barStyle="dark-content"/>
            <Quotes/>
        </ErrorBoundary>
    );
};

export default App;
