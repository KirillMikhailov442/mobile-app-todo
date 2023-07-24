import {StyleSheet} from 'react-native'
import { textColors } from '../../../constants/colors'
import { isSmallScreenSize } from '../../../constants/size'

const HomeHeaderStyles = StyleSheet.create({
    container: {
        justifyContent: 'space-between'
    },

    title: {
        fontSize: isSmallScreenSize ? 18 : 20,
        color: textColors.whiteDefault
    }
})

export default HomeHeaderStyles