import {StyleSheet} from 'react-native'
import { bgColors, borderColors, textColors } from '../../../constants/colors'
import { isSmallScreenSize } from '../../../constants/size'

const ButtonStyles = StyleSheet.create({
    button: {
        borderColor: borderColors.transparent,
        borderWidth: 1,
        fontSize: 16,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
        height: isSmallScreenSize ? 40 : 48,
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