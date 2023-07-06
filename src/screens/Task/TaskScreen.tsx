import React from "react"
import {SafeAreaView} from 'react-native'
import { useNavigation } from "@react-navigation/native"

import { ViewStyles } from "../../styles"
import TaskHeader from "./TaskHeader/TaskHeader"
import { Button } from "../../components/UI"
import { buttonColors } from "../../constants/colors"
import TaskPreferences from "./TaskPreferences/TaskPreferences"
import ChangeableTask from "./ChangeableTask/ChangeableTask"
import { ModalCalendar, ModalCategory, ModalDelete, ModalEditTitleTask, ModalPriority, ModalTime } from "../../components/Modals"

const TaskScreen = () =>{

    const navigation = useNavigation()

    return(
        <SafeAreaView style={[
            ViewStyles.container,
            ViewStyles.fullScreen
        ]}>
            <TaskHeader/>
            <ChangeableTask/>
            <TaskPreferences/>
            <Button
                text="Edit Task"
                onPress={()=> navigation.goBack()}
                styles={{
                    button: {
                        backgroundColor: buttonColors.violetDefault,
                        marginTop: 'auto',
                        marginBottom: 40
                    }
                }}/>

            {/* <ModalCalendar/> */}
            {/* <ModalCategory/> */}
            {/* <ModalPriority/> */}
            {/* <ModalTime/> */}
            {/* <ModalDelete/> */}
            {/* <ModalEditTitleTask/> */}
        </SafeAreaView>
    )
}

export default TaskScreen