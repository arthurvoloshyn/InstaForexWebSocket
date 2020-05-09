import { Dimensions } from 'react-native';
import ILayout from './types';

const { width, height } = Dimensions.get('window');
const smallDeviceWidth = 375;

const Layout: ILayout = {
  window: {
    width,
    height,
  },
  isSmallDevice: width < smallDeviceWidth,
};

export default Layout;
