import React, { FC } from 'react';
import { View, Image } from 'react-native';
import Themes from '../../constants/themes';
import OS from '../../services/detectDeviceOS';
import AppStatusBar from '../../components/AppStatusBar';
import Quotes from "../../screens/Quotes";
import styles from './styles';

const Main: FC = () => (
  <View style={styles.container}>
    <AppStatusBar
      backgroundColor={OS.isIOS ? Themes.lightColor : Themes.primaryColor}
      barStyle={OS.isIOS ? 'dark-content' : 'light-content'}
    />

    <View style={styles.container}>
        <Quotes />
    </View>
  </View>
);

export default Main;
