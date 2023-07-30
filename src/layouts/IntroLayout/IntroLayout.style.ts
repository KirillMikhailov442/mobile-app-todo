import { StyleSheet } from 'react-native'
import { isSmallScreenSize } from '../../constants/size'
import { textColors } from '../../constants/colors'

const IntroLayoutStyles = StyleSheet.create({
    header: {
        height: 52
    },
    footer: {
        height: 48,
        marginTop: 'auto',
        marginBottom: isSmallScreenSize ? 22 : 32,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: isSmallScreenSize ? 70 : 90,
        height: isSmallScreenSize ? 35 : 48,
    },
    buttonText: {
        fontSize: isSmallScreenSize ? 12 : 16,
        color: textColors.grayDefault
    }
})

export default IntroLayoutStyles
