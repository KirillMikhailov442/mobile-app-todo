import { StyleSheet } from "react-native";
import { buttonColors, textColors } from "../../../constants/colors";
import { TextStyles } from "../../../styles";


const FocusTimerStyles = StyleSheet.create({

    container: {
        alignItems: "center",
        marginTop: 43
    },

    timerText: {
        fontSize: 40,
        color: textColors.whiteDefault
    },

    subtimer: {
        ...TextStyles.text,
        textAlign: 'center',
        marginTop: 20
    },

    button: {
        width: 180,
        backgroundColor: buttonColors.violetDefault,
        marginTop: 20
    }
})

export default FocusTimerStyles