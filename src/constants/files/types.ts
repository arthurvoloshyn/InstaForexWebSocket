import { ImageSourcePropType } from 'react-native';
import { FontSource } from 'expo-font';

type IFiles = {
  fonts: { [name: string]: FontSource };
  images: { [name: string]: ImageSourcePropType };
};

export default IFiles;
