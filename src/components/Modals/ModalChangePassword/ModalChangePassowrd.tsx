import React from "react";

import { ModalLayout } from "../../../layouts";
import { Input } from "../../UI";
import ModalChangePassowrdStyles from "./ModalChangePassword.style";


const ModalChangePassword = () =>{
    return(
        <ModalLayout
            title="Change account password"
            visibleModal={true}
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