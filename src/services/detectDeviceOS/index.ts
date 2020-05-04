import { Platform } from 'react-native';
import IDetectDeviceOS from './types';

const OS: IDetectDeviceOS = {
    isAndroid: Platform.OS === 'android',
    isIOS: Platform.OS === 'ios',
};

export default OS;
