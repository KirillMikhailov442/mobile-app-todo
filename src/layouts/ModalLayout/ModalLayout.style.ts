import { StyleSheet } from "react-native";
import { bgColors, borderColors, buttonColors, textColors } from "../../constants/colors";
import { TextStyles } from "../../styles";

const ModalLayoutStyles = StyleSheet.create({

    modal: {
        marginLeft: 24,
        marginRight: 24,
    },
    container: {
        width: '100%',
        marginTop: 'auto',
        backgroundColor: bgColors.blackVeryLight,
        marginBottom: 'auto',
        padding: 8,
        borderRadius: 4
    },

    header:{
        borderBottomColor: borderColors.gray,
        borderBottomWidth: 1
    },
    headerTitle: {
        textAlign: 'center',
        marginBottom: 10,
        ...TextStyles.text,
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },

    footerButton: {
        width: 154,
        backgroundColor: bgColors.transparent,

    },
    footerButtonRight: {
        backgroundColor: buttonColors.violetDefault,
    },

    footerButtonText: {
        color: textColors.violet,
    },

    footerButtonTextRight: {
        color: textColors.whiteDefault
    }
})

export default ModalLayoutStyles