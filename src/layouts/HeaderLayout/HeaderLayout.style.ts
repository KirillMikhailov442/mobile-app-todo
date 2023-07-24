import {StyleSheet} from 'react-native'
import { textColors } from '../../constants/colors'
import { isSmallScreenSize } from '../../constants/size'

const HeaderLayoutStyles = StyleSheet.create({
    header: {
        height: isSmallScreenSize ? 60 : 70,
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 24,
        paddingRight: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: isSmallScreenSize ? 18 : 20,
        color: textColors.whiteDefault
    }
})

export default HeaderLayoutStyles