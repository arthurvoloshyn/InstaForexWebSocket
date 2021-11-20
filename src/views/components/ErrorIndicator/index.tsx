import React, { FC, ReactElement } from 'react';
import { View } from 'react-native';
import AppText from '../AppText';
import { IProps } from './types';
import styles from './styles';

const ErrorIndicator: FC<IProps> = ({ children, message }): ReactElement => (
  <View style={styles.error}>
    <AppText style={styles.title}>Something went wrong!</AppText>
    {message && <AppText style={styles.message}>{message}</AppText>}
    {children}
  </View>
);

export default ErrorIndicator;
