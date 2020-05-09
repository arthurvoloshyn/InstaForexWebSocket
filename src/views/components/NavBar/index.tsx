import React, { FC } from 'react';
import { View } from 'react-native';
import AppText from '../AppText';
import { IProps } from './types';
import styles from './styles';

const NavBar: FC<IProps> = ({ title = 'Simple title' }) => (
  <View style={styles.navbar}>
    <AppText bold style={styles.text}>
      {title}
    </AppText>
  </View>
);

export default NavBar;
