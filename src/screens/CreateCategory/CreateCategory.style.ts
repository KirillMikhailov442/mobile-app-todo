import { StyleSheet, Dimensions } from "react-native";

import { bgColors, textColors } from "../../constants/colors";
import { TextStyles } from "../../styles";

const CreateCategoryStyles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight :'bold',
        color: textColors.whiteDefault,
        marginTop: 26
    },
    label: {
        ...TextStyles.text,
        marginTop: 20,
        marginBottom: 16
    },
    button: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
        width: 'auto',
        height: 50,
        backgroundColor: bgColors.blackVeryLight,
        marginRight: 'auto'
    },

    buttonText: {
        fontSize: 12,
    },

    footer: {
        marginTop: 'auto',
        marginBottom: 47,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default CreateCategoryStyles