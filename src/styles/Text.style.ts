import {StyleSheet} from 'react-native'
import { textColors } from '../constants/colors'
import { isSmallScreenSize } from '../constants/size'

const TextStyles = StyleSheet.create({
    text: {
        color: textColors.whiteDefault,
        fontSize: isSmallScreenSize ? 13 : 16,
        fontWeight: '400',
        fontFamily: 'Lato'
    },
    textCenter: {
        textAlign: 'center'
    },
    title: {
        fontSize: isSmallScreenSize ? 25 : 32,
        fontWeight: 'bold'
    }
})

export default TextStyles