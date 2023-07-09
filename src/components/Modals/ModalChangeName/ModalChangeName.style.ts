import { StyleSheet } from "react-native";
import { bgColors } from "../../../constants/colors";


const ModalChangeNameStyles = StyleSheet.create({
    inputContainer: {
        marginTop: 16,
        width: '95%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    input: {
        backgroundColor: bgColors.transparent,
        height: 42
    },
    inputText: {
        height: 42
    },
})

export default ModalChangeNameStyles