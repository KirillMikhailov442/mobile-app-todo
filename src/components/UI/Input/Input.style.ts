import { StyleSheet } from "react-native";
import { bgColors, borderColors, textColors } from "../../../constants/colors";
import { isSmallScreenSize } from "../../../constants/size";

const inputHeight = isSmallScreenSize ? 40 : 48

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
        minHeight: inputHeight,
        height: 'auto',
        backgroundColor: bgColors.blackLight
    },
    input: {
        flex: 1,
        minHeight: inputHeight,
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