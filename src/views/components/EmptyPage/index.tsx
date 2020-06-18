import React, { FC, ReactElement } from 'react';
import { View, Image } from 'react-native';
import Files from '../../../constants/files';
import styles from './styles';

const { noItems } = Files.images;

const EmptyPage: FC = (): ReactElement => (
  <View style={styles.wrapper}>
    <Image style={styles.image} source={noItems} />
  </View>
);

export default EmptyPage;
