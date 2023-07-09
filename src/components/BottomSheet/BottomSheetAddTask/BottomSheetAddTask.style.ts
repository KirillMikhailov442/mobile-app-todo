import { StyleSheet } from "react-native"
import { bgColors, borderColors } from "../../../constants/colors"

const BottomSheetAddTaskStyles = StyleSheet.create({
    container: {
        height: 230,
        backgroundColor: bgColors.blackVeryLight,
        marginTop: 'auto',
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 24,
        paddingBottom: 18,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    form: {
    },
    title: {
        marginTop: 0,
        fontSize: 20,
        fontWeight: 'bold'
    },
    inputContainer: {
        height: 43,
        borderColor: borderColors.gray,
        marginTop: 14
    },

    input: {
        backgroundColor: bgColors.transparent,
        height: 43,
    },
    inputText: {
        fontSize: 18
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 'auto'
    },

    footerActions: {
        flexDirection: 'row'
    },

    footerActionsItem: {

    }
})

export default BottomSheetAddTaskStyles