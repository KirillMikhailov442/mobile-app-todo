import React from 'react'
import {View, Text, Pressable} from 'react-native'

import CalendarCarouselItemStyles from './CalendarCarouselItem.style'
import { CalendarCarouselItemProps } from '../../../../types'

const listWeekend = ['SUN', 'SAT']

const CalendarCarouselItem: React.FC<CalendarCarouselItemProps> = ({
    dayWeek,
    day,
    isTask,
    onPress
}) =>{

    
    return(
        <Pressable
            onPress={onPress}
            style={CalendarCarouselItemStyles.container}>
            <Text style={[
                CalendarCarouselItemStyles.dayWeek,
                listWeekend.includes(dayWeek.toUpperCase()) && CalendarCarouselItemStyles.dayWeekend
            ]}>{dayWeek.toUpperCase()}</Text>
            <Text style={CalendarCarouselItemStyles.day}>{day}</Text>
            {isTask && <View style={CalendarCarouselItemStyles.isTask}></View>}
        </Pressable>
    )
}

export default CalendarCarouselItem