import {Platform, StyleSheet} from "react-native";
import Themes from "../../../constants/themes";
import OS from "../../../services/detectDeviceOS";
import { Style } from './types';

const styles = StyleSheet.create<Style>({
    navbar: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10,
        ...Platform.select({
            ios: {
                borderBottomColor: Themes.primaryColor,
                borderBottomWidth: 1,
            },
            default: {
                backgroundColor: Themes.primaryColor,
            },
        }),
    },
    text: {
        color: OS.isIOS ? Themes.primaryColor : '#fff',
        fontSize: 20,
    },
});

export default styles;
