import { Dimensions } from 'react-native';
import ILayout, { ISmallDeviceWidth } from './types';

const { width, height } = Dimensions.get('window');
const smallDeviceWidth: ISmallDeviceWidth = 375;

const Layout: ILayout = {
  window: {
    width,
    height,
  },
  isSmallDevice: width < smallDeviceWidth,
};

export default Layout;
