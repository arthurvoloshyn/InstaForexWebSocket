import { ImageSourcePropType } from "react-native";
import { FontSource } from "expo-font";

type File = {
    fonts: {[name: string]: FontSource},
    imgs: {[name: string]: ImageSourcePropType},
};

export default File;
