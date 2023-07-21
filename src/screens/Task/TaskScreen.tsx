import React from "react"
import {SafeAreaView} from 'react-native'
import { useNavigation } from "@react-navigation/native"
import { useDispatch } from "react-redux"

import { ViewStyles } from "../../styles"
import TaskHeader from "./TaskHeader/TaskHeader"
import { Button } from "../../components/UI"
import { buttonColors } from "../../constants/colors"
import TaskPreferences from "./TaskPreferences/TaskPreferences"
import ChangeableTask from "./ChangeableTask/ChangeableTask"
import { hideModal, showModal } from "../../store/slices/modalsSlice"
import { ModalCalendar, ModalCategory, ModalDelete, ModalEditTask, ModalPriority, ModalTime } from "../../components/Modals"

const TaskScreen = () =>{

    const navigation = useNavigation()
    const dispatch = useDispatch()

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

            <ModalCalendar onPressButton={()=> {
                dispatch(hideModal('calendar'))
                dispatch(showModal('time'))
            }}/>
            <ModalCategory/>
            <ModalPriority/>
            <ModalTime/>
            <ModalDelete/>
            <ModalEditTask/>
        </SafeAreaView>
    )
}

export default TaskScreen