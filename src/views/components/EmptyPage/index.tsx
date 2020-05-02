import React, { FC } from 'react';
import { View, Image } from 'react-native';
import Files from '../../../constants/files';
import styles from './styles';

const EmptyPage: FC = () => (
  <View style={styles.wrapper}>
    <Image style={styles.image} source={Files.images.noItems} />
  </View>
);

export default EmptyPage;
