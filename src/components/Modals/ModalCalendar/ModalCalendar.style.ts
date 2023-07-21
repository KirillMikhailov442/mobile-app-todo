import { StyleSheet } from "react-native";
import { bgColors, buttonColors, textColors } from "../../../constants/colors";
import { TextStyles } from "../../../styles";

const ModalCalendarStyles = StyleSheet.create({
    calendar: {
        backgroundColor: bgColors.blackVeryLight,
    },

    day: {
        ...TextStyles.text,
        fontSize: 14,
        fontWeight: 'bold'
    },

    dayDisabled: {
        ...TextStyles.text,
        fontWeight: 'bold',
        color: textColors.grayDefault
    },

    dayToday: {

    },

    dayContainer: {
        width: 25,
        height: 25,
        backgroundColor: bgColors.blackLight,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },

    dayDisableContainer: {
        backgroundColor: bgColors.transparent
    },

    dayTodayContainer: {
        backgroundColor: buttonColors.violetDefault
    }
})

export default ModalCalendarStyles