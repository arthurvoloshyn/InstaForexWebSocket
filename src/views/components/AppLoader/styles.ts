import { StyleSheet } from 'react-native';
import { IStyle } from './types';

const styles = StyleSheet.create<IStyle>({
  loader: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default styles;
