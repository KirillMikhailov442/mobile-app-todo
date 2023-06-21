import { StyleSheet } from "react-native"

const IntroLayoutStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 24,
        paddingRight: 24
    },
    header: {
        height: 52
    },
    footer: {
        height: 48,
        marginTop: 'auto',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default IntroLayoutStyles
