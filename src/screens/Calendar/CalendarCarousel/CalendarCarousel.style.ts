import {StyleSheet} from 'react-native'
import { bgColors, textColors } from '../../../constants/colors'
import { ViewStyles } from '../../../styles'

const CalendarCarouselStyles = StyleSheet.create({
    container: {
        backgroundColor: bgColors.blackVeryLight,
        marginBottom: 5
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...ViewStyles.container,
        height: 50,
        paddingTop: 7,
    },

    headerText: {
    },

    headerTextTitle: {
        textAlign: 'center',
        fontSize: 14,
        color: textColors.whiteDefault
    },

    headerTextSubtitle: {
        textAlign: 'center',
        fontSize: 12,
        color: textColors.grayDefault
    },

    carousel: {
        paddingTop: 7,
        paddingBottom: 7
    }   
})

export default CalendarCarouselStyles