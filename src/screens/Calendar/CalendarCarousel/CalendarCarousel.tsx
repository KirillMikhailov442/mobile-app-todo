import React, { useState } from 'react'
import {View, Text, FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import moment from 'moment'

import CalendarCarouselStyles from './CalendarCarousel.style'
import CalendarCarouselItem from './CalendarCarouselItem/CalendarCarouselItem'

const date = moment().format("YYYY-MM-DD")

const daysInMonthNum = moment().daysInMonth()
const month = moment().format("MMMM")
const monthNumber = moment().format('M')
const year = moment().format("YYYY")


interface IListDaysInMonth {
    day: number,
    weekDay: string    
}


let listDaysInMonth: IListDaysInMonth[] = []

for (let i = 1; i < daysInMonthNum; i++) {

    listDaysInMonth.push({
        day: i,
        weekDay: moment([year, monthNumber, i]).format('ddd') 
    })
    
}

const CalendarCarousel = () =>{
    
    return(
        <View style={CalendarCarouselStyles.container}>
            <View style={CalendarCarouselStyles.header}>
                <Icon name='arrow-left' color={'white'} size={16}/>
                <View style={CalendarCarouselStyles.headerText}>
                    <Text style={CalendarCarouselStyles.headerTextTitle}>{month.toUpperCase()}</Text>
                    <Text style={CalendarCarouselStyles.headerTextSubtitle}>{year}</Text>
                </View>
                <Icon name='arrow-right' color={'white'} size={16}/>
            </View>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                style={CalendarCarouselStyles.carousel}
                data={listDaysInMonth}
                renderItem={({item}) => <CalendarCarouselItem dayWeek={item.weekDay} day={item.day}/>}/>
        </View>
    )
}

export default CalendarCarousel