import { ImageSourcePropType } from "react-native";
import { FontSource } from "expo-font";

type IFile = {
    fonts: { [name: string]: FontSource },
    images: { [name: string]: ImageSourcePropType },
};

export default IFile;
