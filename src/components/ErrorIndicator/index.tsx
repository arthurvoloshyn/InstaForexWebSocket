import React, {FC, ReactNode} from 'react';
import { View } from 'react-native';
import AppText from '../AppText';
import styles from './styles';

type Props = {
    children?: ReactNode;
};

const ErrorIndicator: FC<Props> = ({ children }) => (
  <View style={styles.error}>
    <AppText style={styles.text}>Something went wrong!</AppText>
    {children}
  </View>
);

ErrorIndicator.defaultProps = {
  children: null,
};

export default ErrorIndicator;
