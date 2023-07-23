import React from "react"
import { useDispatch } from "react-redux"

import { BottomSheetAddTask } from "../BottomSheet"
import { ModalCalendar, ModalCategory, ModalPriority, ModalTime } from "../Modals"
import { hideModal, showModal } from "../../store/slices/modalsSlice"
import { useAppNavigation } from "../../hooks"

const AddTask = () =>{

    const dispatch = useDispatch()
    const navigation = useAppNavigation()

    return(
        <>
            <BottomSheetAddTask/>
            <ModalCalendar onPressButton={()=> {
                dispatch(hideModal('calendar'))
                dispatch(showModal('time'))
            }}/>
            <ModalCategory buttons={{
                right: {
                    text: 'Add Category',
                    styles: {
                        button: {
                            width: '100%'
                        }
                    }
                },
            }}/>
            <ModalTime/>
            <ModalPriority/>
        </>
    )
}

export default AddTask