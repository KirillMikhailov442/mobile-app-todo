import React from 'react'
import {SafeAreaView, ScrollView} from 'react-native'

import { ViewStyles } from '../../styles'
import CalendarScreenStyles from './CalendarScreen.style'
import CalendarHeader from './CalendarHeader/CalendarHeader'
import CalendarCarousel from './CalendarCarousel/CalendarCarousel'
import TaskList from '../../components/TasksList/TasksList'
import SelectTasks from './SelectTasks/SelectTasks'
import AddTask from '../../components/AddTask/AddTask'

const tasks = [
    {
        text: 'Do Math Homework',
        check: false,
        completed: false,
        details: {
            date: 'Today At 16:45',
            category: 'University',
            priority: 1
        }
    },

    {
        text: 'Tack out dogs',
        check: false,
        completed: false,
        details: {
            date: 'Today At 18:20',
            category: 'Home',
            priority: 2
        }
    },

    {
        text: 'Business meeting with CEO',
        check: false,
        completed: false,
        details: {
            date: 'Today At 08:15',
            category: 'Work',
            priority: 3
        }
    }
]

const CalendarScreen = () =>{

    return(
        <SafeAreaView   
            style={[
                ViewStyles.fullScreen,
                CalendarScreenStyles.container
        ]}>
            <CalendarHeader/>
            <CalendarCarousel/>
            <ScrollView style={ViewStyles.container}>
                <SelectTasks/>
                <TaskList
                    data={tasks}/>
            </ScrollView>
            <AddTask/>
        </SafeAreaView>
    )
}

export default CalendarScreen