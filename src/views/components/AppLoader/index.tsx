import React, { FC, ReactElement } from 'react';
import { View, ActivityIndicator } from 'react-native';
import Themes from '../../../constants/themes';
import { IProps } from './types';
import styles from './styles';

const AppLoader: FC<IProps> = ({
  size = 'large',
  color = Themes.primaryColor,
  ...attrs
}): ReactElement => (
  <View style={styles.loader}>
    <ActivityIndicator size={size} color={color} {...(attrs as IProps)} />
  </View>
);

export default AppLoader;
