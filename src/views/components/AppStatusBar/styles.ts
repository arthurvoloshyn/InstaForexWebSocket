import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { IStyle } from './types';

const styles = StyleSheet.create<IStyle>({
  statusBar: {
    height: Constants.statusBarHeight,
  },
});

export default styles;
