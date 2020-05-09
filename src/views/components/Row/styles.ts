import { StyleSheet } from 'react-native';
import Layout from '../../../services/getDeviceLayout';
import { IStyle } from './types';

const styles = StyleSheet.create<IStyle>({
  infoText: {
    fontSize: 15,
    textAlign: 'right',
  },
  symbol: {
    fontSize: Layout.isSmallDevice ? 16 : 18,
  },
  textContainer: {
    flex: 1,
    marginRight: 6,
  },
});

export default styles;
