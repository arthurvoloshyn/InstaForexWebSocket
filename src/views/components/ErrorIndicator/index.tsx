import React, { FC } from 'react';
import { View } from 'react-native';
import {IProps} from "./types";
import AppText from '../AppText';
import styles from './styles';

const ErrorIndicator: FC<IProps> = ({ children }) => (
  <View style={styles.error}>
    <AppText style={styles.text}>Something went wrong!</AppText>
    {children}
  </View>
);

ErrorIndicator.defaultProps = {
  children: null,
};

export default ErrorIndicator;
