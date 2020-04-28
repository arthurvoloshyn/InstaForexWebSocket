import React, {FC} from 'react';
import { View, ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import Themes from '../../../constants/themes';
import styles from './styles';

const AppLoader: FC<ActivityIndicatorProps> = ({ size, color, ...attrs }) => (
  <View style={styles.loader}>
    <ActivityIndicator size={size} color={color} {...attrs} />
  </View>
);

AppLoader.defaultProps = {
  size: 'large',
  color: Themes.primaryColor,
};

export default AppLoader;
