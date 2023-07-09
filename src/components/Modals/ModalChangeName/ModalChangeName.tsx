import React from "react";

import { ModalLayout } from "../../../layouts";
import { Input } from "../../UI";
import { bgColors } from "../../../constants/colors";
import ModalChangeNameStyles from "./ModalChangeName.style";



const ModalChangeName = () =>{
    return(
        <ModalLayout
            title="Change account name"
            visibleModal={true}
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