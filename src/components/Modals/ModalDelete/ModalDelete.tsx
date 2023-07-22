import React, { useEffect, useState } from 'react'
import {Text} from 'react-native'

import { ModalLayout } from '../../../layouts'
import ModalDeleteStyles from './ModalDelete.style'
import { hideModal } from '../../../store/slices/modalsSlice'
import { useAppDispatch, useAppSelector } from '../../../hooks'

const ModalDelete = () =>{

    const dispatch = useAppDispatch()
    const [modalState] = useAppSelector(state => state.modals.filter(modal => modal.name === 'delete'))
    
    const [showModal, setShowModal] = useState(modalState.showModal)

    useEffect(()=> {
        setShowModal(modalState.showModal)
    }, [modalState])

    return(
        <ModalLayout
            visibleModal={showModal}
            onBackdropPress={()=> dispatch(hideModal('delete'))}
            buttons={{
                left: {
                    text: 'Cancel'
                },
                right: {
                    text: 'Delete'
                }
            }}
            title='Delete Task'>
                <Text style={ModalDeleteStyles.text}>Are You sure you want to delete this task?
                    Task title : Do math homework</Text>
        </ModalLayout>
    )
}

export default ModalDelete