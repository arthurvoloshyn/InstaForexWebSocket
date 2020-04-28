import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Style } from './types';

const styles = StyleSheet.create<Style>({
  statusBar: {
    height: Constants.statusBarHeight,
  },
});

export default styles;
