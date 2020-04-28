import React, { FC } from 'react';
import { View } from 'react-native';
import Themes from '../../../constants/themes';
import OS from '../../../services/detectDeviceOS';
import Quotes from "../../screens/Quotes";
import AppStatusBar from '../../components/AppStatusBar';
import NavBar from '../../components/NavBar';
import styles from './styles';

const Main: FC = () => (
  <View style={styles.container}>
    <AppStatusBar
      backgroundColor={OS.isIOS ? Themes.lightColor : Themes.primaryColor}
      barStyle={OS.isIOS ? 'dark-content' : 'light-content'}
    />

    <NavBar title="InstaForex" />

    <View style={styles.container}>
        <Quotes />
    </View>
  </View>
);

export default Main;
