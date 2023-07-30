import React, { useEffect, useState } from 'react';

import { ModalLayout } from '../../../layouts';
import { Input } from '../../UI';
import ModalChangePassowrdStyles from './ModalChangePassword.style';
import { hideModal } from '../../../store/slices/modalsSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';


const ModalChangePassword = () =>{

    const dispatch = useAppDispatch()
    const [modalState] = useAppSelector(state => state.modals.filter(modal => modal.name === 'changePassword'))

    const [showModal, setShowModal] = useState(modalState.showModal)

    useEffect(()=>{
        setShowModal(modalState.showModal)
    }, [modalState])

    return(
        <ModalLayout
            title='Change account password'
            visibleModal={showModal}
            onBackdropPress={()=> dispatch(hideModal('changePassword'))}
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
                    label='Enter old password'
                    security
                    placeholder={{
                        text: 'Enter old password'
                    }}
                    styles={{
                        container: ModalChangePassowrdStyles.inputContainer,
                        input: ModalChangePassowrdStyles.input
                    }}/>
                    <Input
                        label='Enter new password'
                        security
                        placeholder={{
                            text: 'Enter new password'
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