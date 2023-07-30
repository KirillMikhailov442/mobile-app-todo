import React, { useEffect, useState } from 'react';

import { ModalLayout } from '../../../layouts';
import { Input } from '../../UI';
import ModalChangeNameStyles from './ModalChangeName.style';
import { hideModal } from '../../../store/slices/modalsSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';



const ModalChangeName = () =>{

    const dispatch = useAppDispatch()
    const [modalState] = useAppSelector(state => state.modals.filter(modal => modal.name === 'changeName'))

    const [showModal, setShowModal] = useState(modalState.showModal)
    
    useEffect(()=>{
        setShowModal(modalState.showModal)
        
    }, [modalState])

    return(
        <ModalLayout
            title='Change account name'
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
                        text: 'Enter new name'
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