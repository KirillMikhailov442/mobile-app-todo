import { StyleSheet } from "react-native";
import { bgColors, textColors } from "../../../constants/colors";

const BoxListStyles = StyleSheet.create({
    container: {
        width: 64,
        height: 64,
        borderRadius: 5,
        backgroundColor: bgColors.blackDefault
    },

    text: {
        color: textColors.grayDark,
        textAlign: 'center',
        fontSize :24,
        fontWeight: '700',
        width: 64,
        height: 32
    }
})

export default BoxListStyles