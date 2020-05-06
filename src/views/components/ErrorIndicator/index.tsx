import React, { FC } from 'react';
import { View } from 'react-native';
import AppText from '../AppText';
import styles from './styles';

const ErrorIndicator: FC = ({ children = null }) => (
  <View style={styles.error}>
    <AppText style={styles.text}>Something went wrong!</AppText>
    {children}
  </View>
);

export default ErrorIndicator;
