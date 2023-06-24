import { StyleSheet } from "react-native";

const InputStyles = StyleSheet.create({
    container: {
        width: '100%',
        height: 48
    },
    label: {
        marginBottom: 8
    },
    inputView: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 4,
        width: '100%'
    },
    input: {
        width: 'auto',
        height: 48
    }
})

export default InputStyles