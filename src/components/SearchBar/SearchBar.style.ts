import { StyleSheet } from "react-native";
import { isSmallScreenSize } from "../../constants/size";

const SearchBarStyles = StyleSheet.create({
    icon: {
        paddingLeft: 10,
        paddingRight: 5
    },
    input: {
        paddingLeft: 5,
        paddingRight: 10,
        height: isSmallScreenSize ? 40 : 48
    },
    inputContainer: {
        paddingBottom: 10,
    }
})

export default SearchBarStyles