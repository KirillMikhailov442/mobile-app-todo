import { StyleSheet } from "react-native";
import { ViewStyles } from "../../styles";
import { bgColors } from "../../constants/colors";


const FocusScreenStyles = StyleSheet.create({
    content: {
        ...ViewStyles.container,
        backgroundColor: bgColors.blackDefault
    }
})

export default FocusScreenStyles