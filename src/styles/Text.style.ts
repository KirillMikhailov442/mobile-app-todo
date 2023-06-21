import {StyleSheet} from 'react-native'
import { textColors } from '../constants/colors'

const TextStyles = StyleSheet.create({
    text: {
        color: textColors.whiteDefault,
        fontSize: 16,
        fontWeight: '400'
    },
    textCenter: {
        textAlign: 'center'
    }
})

export default TextStyles