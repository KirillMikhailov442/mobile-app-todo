import { StyleSheet } from "react-native";
import { TextStyles } from "../../../styles";
import { textColors } from "../../../constants/colors";

const HomeEmptyStyles = StyleSheet.create({
    container: {
        marginTop: 75,
        alignItems: 'center'
    },

    title: {
        marginTop: 10,
        color: textColors.whiteDefault,
        fontSize: 20
    },

    subtitle: {
        ...TextStyles.text,
        marginTop: 10
    }
})

export default HomeEmptyStyles