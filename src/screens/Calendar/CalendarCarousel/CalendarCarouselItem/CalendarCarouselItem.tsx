import React from 'react'
import {View, Text} from 'react-native'

import CalendarCarouselItemStyles from './CalendarCarouselItem.style'
import { CalendarCarouselItemProps } from '../../../../types'

const CalendarCarouselItem: React.FC<CalendarCarouselItemProps> = ({
    day
}) =>{
    return(
        <View style={CalendarCarouselItemStyles.container}>
            <Text style={CalendarCarouselItemStyles.dayWeek}>MON</Text>
            <Text style={CalendarCarouselItemStyles.day}>{day}</Text>
        </View>
    )
}

export default CalendarCarouselItem