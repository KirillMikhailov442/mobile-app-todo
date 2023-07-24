import React from 'react'
import {SafeAreaView, ScrollView} from 'react-native'

import { ViewStyles } from '../../styles'
import CalendarScreenStyles from './CalendarScreen.style'
import CalendarHeader from './CalendarHeader/CalendarHeader'
import CalendarCarousel from './CalendarCarousel/CalendarCarousel'
import TaskList from '../../components/TasksList/TasksList'
import SelectTasks from './SelectTasks/SelectTasks'
import AddTask from '../../components/AddTask/AddTask'
import { useAppSelector } from '../../hooks'


const CalendarScreen = () =>{

    const tasks = useAppSelector(state => state.tasks.filter(item => item.completed === false))

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
                    data={tasks}
                    styles={{container: {paddingBottom: 40}}}/>
            </ScrollView>
            <AddTask/>
        </SafeAreaView>
    )
}

export default CalendarScreen