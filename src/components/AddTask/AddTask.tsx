import React from "react"
import { BottomSheetAddTask } from "../BottomSheet"
import { ModalCalendar, ModalCategory, ModalPriority, ModalTime } from "../Modals"

const AddTask = () =>{
    return(
        <>
            <BottomSheetAddTask/>
            <ModalCalendar/>
            <ModalCategory/>
            <ModalTime/>
            <ModalPriority/>
        </>
    )
}

export default AddTask