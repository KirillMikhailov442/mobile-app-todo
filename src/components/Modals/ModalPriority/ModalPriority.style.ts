import { StyleSheet } from "react-native";

import { ViewStyles } from "../../../styles";
import { buttonColors } from "../../../constants/colors";


const ModalPriorityStyles = StyleSheet.create({
    grid: {
        maxHeight: 400,
        width: 320,
        marginLeft: 'auto',
        marginRight: 'auto',
        ...ViewStyles.grid
    },

    priorityCardContainer: {
        margin: 8
    },

    prioritySelectedCard: {
        backgroundColor: buttonColors.violetDefault
    }
})

export default ModalPriorityStyles