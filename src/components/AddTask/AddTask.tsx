import React from "react"

import { BottomSheetAddTask } from "../BottomSheet"
import { ModalCalendar, ModalCategory, ModalPriority, ModalTime } from "../Modals"
import { hideModal, showModal } from "../../store/slices/modalsSlice"
import { useAppDispatch } from "../../hooks"

const AddTask = () =>{

    const dispatch = useAppDispatch()

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
                }
            }}/>
            <ModalTime/>
            <ModalPriority/>
        </>
    )
}

export default AddTask