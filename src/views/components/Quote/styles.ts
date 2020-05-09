import { StyleSheet } from 'react-native';
import Themes from '../../../constants/themes';
import { IStyle } from './types';

export default StyleSheet.create<IStyle>({
  changeFieldContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: Themes.mutedColor,
  },
  icon: {
    marginLeft: 4,
  },
});
