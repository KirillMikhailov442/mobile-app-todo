import { StyleSheet } from "react-native";

import { buttonColors } from "../../../constants/colors";
import { TextStyles } from "../../../styles";


const FocusSheduleStyles = StyleSheet.create({

    container: {
        marginTop: 50
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 0
    },

    title: {
        ...TextStyles.text,
        fontSize: 20
    },

    button: {
        width: 100,
        height: 30,
        backgroundColor: buttonColors.grayDefault,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0
    },

    buttonText: {
        fontSize: 12
    }
})

export default FocusSheduleStyles