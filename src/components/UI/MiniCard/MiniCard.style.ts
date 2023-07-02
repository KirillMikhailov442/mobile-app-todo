import { StyleSheet } from "react-native";


import { TextStyles } from "../../../styles";
import { bgColors, textColors } from "../../../constants/colors";

const MiniCardStyles = StyleSheet.create({
    container: {
        width: 64
    },
    card: {
        width: "100%",
        height: 64,
        backgroundColor: bgColors.blackLight,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    cardText: {
        ...TextStyles.text,
        marginTop: 5
    },  

    bottomLabel: {
        marginTop: 5,
        fontSize: 14,
        color: textColors.whiteDefault,
        textAlign: 'center'
    }
})

export default MiniCardStyles