import { StyleSheet } from "react-native";

import { borderColors, textColors } from "../../../constants/colors";

const CheckBoxStyles = StyleSheet.create({
    container: {
        width: 16,
        height: 16,
        borderRadius: 50,
        borderColor: borderColors.white,
        borderWidth: 1.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkBox: {
        borderRadius: 50,
        width: 7.5,
        height: 7.5
    },

    checkBoxActive: {
        backgroundColor: textColors.violet,

    }
})

export default CheckBoxStyles