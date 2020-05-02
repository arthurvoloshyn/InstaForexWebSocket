import { Dimensions, ScaledSize } from 'react-native';
import { ILayout } from './types';

const { width, height }: ScaledSize = Dimensions.get('window');
const smallDeviceWidth: number = 375;

const Layout: ILayout = {
    window: {
        width,
        height,
    },
    isSmallDevice: width < smallDeviceWidth,
};

export default Layout;
