import { StyleSheet } from "react-native";
import { bgColors, borderColors, textColors } from "../../../constants/colors";

const InputStyles = StyleSheet.create({
    container: {
        width: '100%',
    },
    label: {
        marginBottom: 8,
    },
    inputView: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 4,
        width: '100%',
        borderColor: borderColors.gray,
        borderWidth: 0.8,
        height: 48,
        backgroundColor: bgColors.blackLight
    },
    input: {
        width: 'auto',
        height: 48,
        paddingLeft: 12,
        paddingRight: 12
    }
})

export default InputStyles