import { StyleSheet } from "react-native";
import { bgColors, borderColors, buttonColors, textColors } from "../../../constants/colors";
import { TextStyles } from "../../../styles";

const TaskStyles = StyleSheet.create({
    container: {
        backgroundColor: bgColors.blackVeryLight,
        minHeight: 72,
        borderRadius: 4,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 4,
        paddingTop: 4,
        flexDirection: 'row',
        marginTop: 16
    },
    checkBox: {
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    content: {
        flex: 1,
        paddingTop: 8,
        paddingLeft: 12
    },
    text: {
        ...TextStyles.text
    },
    details: {
        marginTop: 6,
        flex: 1,
        flexDirection: 'row',
    },

    detailsButton: {
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 8,
        paddingRight: 8,
        height: 30,
        width: 'auto',
    },

    detailsButtonCategory: {
        marginLeft: 'auto',
        backgroundColor: buttonColors.violetLittleLight,
        overflow: 'hidden'
    },
    detailsButtonPriority: {
        marginLeft: 12,
        borderColor: borderColors.violetDefault
    },

    detailsButtonText: {
        color: 'white',
    },

    detailsDate: {
        color: textColors.grayDefault,
        fontSize: 12
    }
})

export default TaskStyles