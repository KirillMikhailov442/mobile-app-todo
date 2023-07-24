import React from "react";
import { ScrollView, View } from "react-native";

import { ViewStyles } from "../../../styles";
import {SearchBar} from '../../../components/index'
import TasksList from "../../../components/TasksList/TasksList";
import { useAppSelector } from "../../../hooks";


const HomeContent = () =>{


    const tasks = useAppSelector(state => state.tasks)

    return(
        <View style={[ViewStyles.container, ViewStyles.fullScreen]}>
            <SearchBar/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <TasksList
                    label="Today"
                    data={tasks.filter(item => item.completed === false)}/>
                <TasksList 
                    label="Completed"
                    data={tasks.filter(item => item.completed === true)}
                    styles={{container: {paddingBottom: 40}}}
                    />
            </ScrollView>
        </View>
    )
}

export default HomeContent