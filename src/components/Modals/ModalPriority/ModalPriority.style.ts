import { StyleSheet } from "react-native";

import { ViewStyles } from "../../../styles";


const ModalPriorityStyles = StyleSheet.create({
    grid: {
        maxHeight: 400,
        width: 320,
        marginLeft: 'auto',
        marginRight: 'auto',
        ...ViewStyles.grid
    }
})

export default ModalPriorityStyles