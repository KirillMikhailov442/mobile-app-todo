import React from "react";
import { ScrollView, View } from "react-native";

import { ViewStyles } from "../../../styles";
import {SearchBar} from '../../../components/index'
import TasksList from "../../../components/TasksList/TasksList";
import { TaskProps } from "../../../types";

const tasks: TaskProps[] = [
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

const tasksCompleted: TaskProps[] = [
    {
        text: 'Buy Grocery',
        check: false,
        completed: true,
        details: {
            date: 'Today At 16:45',
        }
    }
]

const HomeContent = () =>{
    return(
        <View style={[ViewStyles.container, ViewStyles.fullScreen]}>
            <SearchBar/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <TasksList
                    label="Today"
                    data={tasks}/>
                <TasksList 
                    label="Completed"
                    data={tasksCompleted}
                    />
            </ScrollView>
        </View>
    )
}

export default HomeContent