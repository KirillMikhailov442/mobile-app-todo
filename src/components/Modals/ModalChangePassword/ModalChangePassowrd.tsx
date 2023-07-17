import React, { useState } from "react";

import { ModalLayout } from "../../../layouts";
import { Input } from "../../UI";
import ModalChangePassowrdStyles from "./ModalChangePassword.style";
import { useDispatch, useSelector } from "react-redux";


const ModalChangePassword = () =>{

    const dispatch = useDispatch()
    const [modalState] = useSelector(state => state.modals.filter(modal => modal.name === 'changePassword'))

    const [showModal, setShowModal] = useState(modalState.showModal)

    return(
        <ModalLayout
            title="Change account password"
            visibleModal={showModal}
            buttons={{
                left: {
                    text: 'Cancel'
                },
                right: {
                    text: 'Edit'
                }
            }}>
                <>
                <Input
                    label="Enter old password"
                    security
                    placeholder={{
                        text: "Enter new name"
                    }}
                    styles={{
                        container: ModalChangePassowrdStyles.inputContainer,
                        input: ModalChangePassowrdStyles.input
                    }}/>
                    <Input
                        label="Enter new password"
                        security
                        placeholder={{
                            text: "Enter new name"
                        }}
                        styles={{
                            container: ModalChangePassowrdStyles.inputContainer,
                            input: ModalChangePassowrdStyles.input
                        }}/>
                </>
        </ModalLayout>
    )
}

export default ModalChangePassword