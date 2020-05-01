import {StyleSheet} from 'react-native';
import Layout from '../../../services/getDeviceLayout';
import { IStyle } from './types';

export default StyleSheet.create<IStyle>({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  textContainer: {
    flex: 1,
    marginRight: 6,
  },
  changeFieldContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  symbol: {
    fontSize: Layout.isSmallDevice ? 14 : 18,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: Layout.isSmallDevice ? 14 : 15,
    fontWeight: '500',
    textAlign: 'right',
  },
  icon: {
    marginLeft: 4,
  },
});
