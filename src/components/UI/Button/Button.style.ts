import {StyleSheet} from 'react-native'
import { bgColors, borderColors, textColors } from '../../../constants/colors'

const ButtonStyles = StyleSheet.create({
    button: {
        borderColor: borderColors.transparent,
        borderWidth: 1,
        paddingTop: 12,
        paddingBottom: 12,
        fontSize: 16,
        alignItems: 'center',
        height: 48,
        width: '100%',
        backgroundColor: bgColors.transparent,
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '400',
        color: textColors.whiteDefault
    }
})

export default ButtonStyles