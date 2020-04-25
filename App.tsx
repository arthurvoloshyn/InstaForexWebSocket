import React, {FC} from 'react';
import {StatusBar} from 'react-native';
import Quotes from './src/screens/Quotes';

const App: FC = () => (
    <>
      <StatusBar barStyle="dark-content" />
      <Quotes />
    </>
);

export default App;
