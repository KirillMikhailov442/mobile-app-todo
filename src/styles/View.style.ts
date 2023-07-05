import { StyleSheet } from "react-native";

const ViewStyles = StyleSheet.create({
    container: {
        paddingLeft: 24,
        paddingRight: 24
    },

    fullScreen: {
        flex: 1
    },
    
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})

export default ViewStyles