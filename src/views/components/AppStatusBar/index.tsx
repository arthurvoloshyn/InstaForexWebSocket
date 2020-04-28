import React, {FC} from 'react';
import {StatusBar, View, StatusBarStyle} from 'react-native';
import Themes from '../../../constants/themes';
import styles from './styles';

type Props = {
  backgroundColor?: string;
  translucent?: boolean;
  barStyle?: StatusBarStyle;
};

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
