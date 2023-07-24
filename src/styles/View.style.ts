import { StyleSheet } from "react-native";
import { isSmallScreenSize, screenWidth } from "../constants/size";

const ViewStyles = StyleSheet.create({
    container: {
        paddingLeft: isSmallScreenSize ? 10 : 24,
        paddingRight: isSmallScreenSize ? 10 : 24
    },

    fullScreen: {
        flex: 1
    },
    
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    grid: {
        width: '100%'
    }
})

export default ViewStyles