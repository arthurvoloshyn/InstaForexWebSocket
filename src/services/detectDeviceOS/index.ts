import { Platform } from 'react-native';

const OS = {
    isAndroid: Platform.OS === 'android',
    isIOS: Platform.OS === 'ios',
};

export default OS;
