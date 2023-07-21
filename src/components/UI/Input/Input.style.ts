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
        minHeight: 48,
        height: 'auto',
        backgroundColor: bgColors.blackLight
    },
    input: {
        flex: 1,
        minHeight: 48,
        paddingLeft: 12,
        paddingRight: 12
    },
    error: {
        color: textColors.red,
        marginTop: 3,
        marginLeft: 10
    },
})

export default InputStyles