import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const smallDeviceWidth = 375;

const Layout = {
    window: {
        width,
        height,
    },
    isSmallDevice: width < smallDeviceWidth,
};

export default Layout;
