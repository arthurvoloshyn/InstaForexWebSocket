import React from 'react';
import {StatusBar} from 'react-native';
import {Quotes} from './src/screens/Quotes';

const App = () => {
  return (
      <>
        <StatusBar barStyle="dark-content" />
        <Quotes />
      </>
  );
};

export default App;
