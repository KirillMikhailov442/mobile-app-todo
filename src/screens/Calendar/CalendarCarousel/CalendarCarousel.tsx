import React from 'react'
import {View, Text, FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import CalendarCarouselStyles from './CalendarCarousel.style'
import CalendarCarouselItem from './CalendarCarouselItem/CalendarCarouselItem'

const daysInMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const CalendarCarousel = () =>{
    return(
        <View style={CalendarCarouselStyles.container}>
            <View style={CalendarCarouselStyles.header}>
                <Icon name='arrow-left' color={'white'} size={16}/>
                <View style={CalendarCarouselStyles.headerText}>
                    <Text style={CalendarCarouselStyles.headerTextTitle}>FEBRUARY</Text>
                    <Text style={CalendarCarouselStyles.headerTextSubtitle}>2022</Text>
                </View>
                <Icon name='arrow-right' color={'white'} size={16}/>
            </View>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                style={CalendarCarouselStyles.carousel}
                data={daysInMonth}
                renderItem={({item}) => <CalendarCarouselItem day={item}/>}/>
        </View>
    )
}

export default CalendarCarousel