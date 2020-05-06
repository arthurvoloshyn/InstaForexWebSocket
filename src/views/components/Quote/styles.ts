import { StyleSheet } from 'react-native';
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
  changeFieldContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 4,
  },
});
