import {StyleSheet} from 'react-native'
import { textColors } from '../../../constants/colors'

const HomeHeaderStyles = StyleSheet.create({
    container: {
        justifyContent: 'space-between'
    },

    title: {
        fontSize: 20,
        color: textColors.whiteDefault
    }
})

export default HomeHeaderStyles