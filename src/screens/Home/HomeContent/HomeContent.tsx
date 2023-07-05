import React from "react";
import { ScrollView, View } from "react-native";

import { ViewStyles } from "../../../styles";
import {SearchBar} from '../../../components/index'
import ToDoList from "../../../components/ToDoList/ToDoList";
import { ToDoItemProps } from "../../../types";

const tasks:ToDoItemProps[] = [
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

const tasksCompleted:ToDoItemProps[] = [
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
        <View style={ViewStyles.container}>
            <SearchBar/>
            <ScrollView>
                <ToDoList
                    label="Today"
                    data={tasks}/>
                <ToDoList 
                    label="Completed"
                    data={tasksCompleted}
                    styles={{container: {marginBottom: 40}}}/>
            </ScrollView>
        </View>
    )
}

export default HomeContent