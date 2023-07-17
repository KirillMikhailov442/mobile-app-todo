import React, { useEffect, useState } from "react";

import { ModalLayout } from "../../../layouts";
import { Input } from "../../UI";
import { bgColors } from "../../../constants/colors";
import ModalChangeNameStyles from "./ModalChangeName.style";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../../store/slices/modalsSlice";



const ModalChangeName = () =>{

    const dispatch = useDispatch()
    const [modalState] = useSelector(state => state.modals.filter(modal => modal.name === 'changeName'))

    const [showModal, setShowModal] = useState(modalState.showModal)
    
    useEffect(()=>{
        
        setShowModal(modalState.showBottomSheet)
    }, [modalState])

    return(
        <ModalLayout
            title="Change account name"
            visibleModal={showModal}
            onBackdropPress={()=> dispatch(hideModal('changeName'))}
            buttons={{
                left: {
                    text: 'Cancel'
                },
                right: {
                    text: 'Edit'
                }
            }}>
                <Input
                    placeholder={{
                        text: "Enter new name"
                    }}
                    styles={{
                        container: ModalChangeNameStyles.inputContainer,
                        input: ModalChangeNameStyles.input,
                        inputText: ModalChangeNameStyles.inputText
                    }}/>
        </ModalLayout>
    )
}

export default ModalChangeName