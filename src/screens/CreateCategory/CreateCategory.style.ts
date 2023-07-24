import { StyleSheet, Dimensions } from "react-native";

import { bgColors, textColors } from "../../constants/colors";
import { TextStyles } from "../../styles";
import { isSmallScreenSize } from "../../constants/size";

const CreateCategoryStyles = StyleSheet.create({
    title: {
        fontSize: isSmallScreenSize ? 18 : 20,
        fontWeight :'bold',
        color: textColors.whiteDefault,
        marginTop: isSmallScreenSize ? 16 : 26
    },
    label: {
        ...TextStyles.text,
        marginTop: 20,
        marginBottom: 16
    },
    button: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: isSmallScreenSize ? 12 : 16,
        paddingRight: isSmallScreenSize ? 12 : 16,
        width: 'auto',
        height: isSmallScreenSize ? 40 : 50,
        backgroundColor: bgColors.blackVeryLight,
        marginRight: 'auto'
    },

    buttonText: {
        fontSize: isSmallScreenSize ? 12 : 16,
    },

    footer: {
        marginTop: 'auto',
        marginBottom: 45,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default CreateCategoryStyles