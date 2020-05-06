import React, { FC } from 'react';
import { StatusBar, View } from 'react-native';
import Themes from '../../../constants/themes';
import { IProps, IStatusBarStyle } from './types';
import styles from './styles';

const AppStatusBar: FC<IProps> = ({
  backgroundColor = Themes.primaryColor,
  translucent = true,
  ...attrs
}) => {
  const statusBarStyles: IStatusBarStyle = { backgroundColor };

  return (
    <View style={[styles.statusBar, statusBarStyles]}>
      <StatusBar translucent={translucent} backgroundColor={backgroundColor} {...attrs} />
    </View>
  );
};

export default AppStatusBar;
