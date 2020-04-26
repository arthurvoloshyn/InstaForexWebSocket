import React, {FC} from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import Files from './src/constants/files';
import Main from "./src/layouts/Main";
import ErrorBoundary from './src/components/ErrorBoundary';

const App: FC = () => {
    const [fontsLoaded] = useFonts(Files.fonts);

    if (!fontsLoaded) return <AppLoading />;

    return (
        <ErrorBoundary>
            <Main />
        </ErrorBoundary>
    );
};

export default App;
