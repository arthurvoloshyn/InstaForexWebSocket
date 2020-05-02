import { StyleSheet } from 'react-native';
import { IStyle } from './types';

const styles = StyleSheet.create<IStyle>({
  image: {
    height: '100%',
    resizeMode: 'contain',
    width: '100%',
  },
  wrapper: {
    alignItems: 'center',
    height: 300,
    justifyContent: 'center',
    padding: 10,
  },
});

export default styles;
