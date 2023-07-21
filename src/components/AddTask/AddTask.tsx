import React from "react"
import { useDispatch } from "react-redux"

import { BottomSheetAddTask } from "../BottomSheet"
import { ModalCalendar, ModalCategory, ModalPriority, ModalTime } from "../Modals"
import { hideModal, showModal } from "../../store/slices/modalsSlice"

const AddTask = () =>{

    const dispatch = useDispatch()

    return(
        <>
            <BottomSheetAddTask/>
            <ModalCalendar onPressButton={()=> {
                dispatch(hideModal('calendar'))
                dispatch(showModal('time'))
            }}/>
            <ModalCategory/>
            <ModalTime/>
            <ModalPriority/>
        </>
    )
}

export default AddTask