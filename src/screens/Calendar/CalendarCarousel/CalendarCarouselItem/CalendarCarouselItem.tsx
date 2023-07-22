import React from 'react'
import {View, Text} from 'react-native'

import CalendarCarouselItemStyles from './CalendarCarouselItem.style'
import { CalendarCarouselItemProps } from '../../../../types'

const listWeekend = ["SUN", "SAT"]

const CalendarCarouselItem: React.FC<CalendarCarouselItemProps> = ({
    dayWeek,
    day,
    onPress
}) =>{

    
    return(
        <View style={CalendarCarouselItemStyles.container}>
            <Text style={[
                CalendarCarouselItemStyles.dayWeek,
                listWeekend.includes(dayWeek.toUpperCase()) && CalendarCarouselItemStyles.dayWeekend
            ]}>{dayWeek.toUpperCase()}</Text>
            <Text style={CalendarCarouselItemStyles.day}>{day}</Text>
        </View>
    )
}

export default CalendarCarouselItem