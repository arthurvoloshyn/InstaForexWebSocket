import { StyleSheet } from 'react-native';
import Themes from '../../../constants/themes';
import { IStyle } from './types';

const styles = StyleSheet.create<IStyle>({
  button: {
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  text: {
    color: Themes.lightColor,
  },
});

export default styles;
