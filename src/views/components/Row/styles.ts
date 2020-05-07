import { StyleSheet } from 'react-native';
import Layout from "../../../services/getDeviceLayout";
import { IStyle } from './types';

const styles = StyleSheet.create<IStyle>({
  textContainer: {
    flex: 1,
    marginRight: 6,
  },
  symbol: {
    fontSize: Layout.isSmallDevice ? 16 : 18,
  },
  infoText: {
    fontSize: 15,
    textAlign: 'right',
  },
});

export default styles;
