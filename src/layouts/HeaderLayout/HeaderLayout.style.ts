import {StyleSheet} from 'react-native'
import { textColors } from '../../constants/colors'

const HeaderLayoutStyles = StyleSheet.create({
    header: {
        height: 70,
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 24,
        paddingRight: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 20,
        color: textColors.whiteDefault
    }
})

export default HeaderLayoutStyles