import {StyleSheet} from 'react-native'
import { bgColors, textColors } from '../../../../constants/colors'

const CalendarCarouselItemStyles = StyleSheet.create({
    container: {
        width: 40,
        height: 48,
        borderRadius: 5,
        backgroundColor: bgColors.blackLight,
        alignItems:'center',
        justifyContent: 'center',
        marginLeft: 5,
        marginRight: 5,
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 5,
        paddingRight: 5
    },

    dayWeek: {
        color: textColors.whiteDefault,
        fontSize: 12,
        fontWeight: 'bold'
    },

    dayWeekend: {
        color: textColors.red
    },

    day: {
        color: textColors.whiteDefault,
        fontSize: 14,
        fontWeight: 'bold'
    }
})

export default CalendarCarouselItemStyles