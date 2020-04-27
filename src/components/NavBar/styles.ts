import {Platform, StyleSheet} from "react-native";
import OS from "../../services/detectDeviceOS";
import Themes from "../../constants/themes";

const styles = StyleSheet.create({
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
            android: {
                backgroundColor: Themes.primaryColor,
            },
        }),
    },
    text: {
        color: OS.isIOS ? Themes.mainColor : '#fff',
        fontSize: 20,
    },
});

export default styles;
