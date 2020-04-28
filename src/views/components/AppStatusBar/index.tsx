import React, {FC} from 'react';
import {StatusBar, View} from 'react-native';
import Themes from '../../../constants/themes';
import { Props } from './types';
import styles from './styles';

const AppStatusBar: FC<Props> = ({ backgroundColor, translucent, ...attrs }) => {
  const statusBarStyles = { backgroundColor };

  return (
    <View style={[styles.statusBar, statusBarStyles]}>
      <StatusBar translucent={translucent} backgroundColor={backgroundColor} {...attrs} />
    </View>
  );
};

AppStatusBar.defaultProps = {
  backgroundColor: Themes.primaryColor,
  translucent: true,
};

export default AppStatusBar;
