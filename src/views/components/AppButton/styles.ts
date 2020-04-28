import { StyleSheet } from 'react-native';
import Themes from '../../../constants/themes';
import { Style } from './types';

const styles = StyleSheet.create<Style>({
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
