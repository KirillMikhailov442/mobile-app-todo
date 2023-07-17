import React, { useState } from 'react'
import {Text} from 'react-native'

import { ModalLayout } from '../../../layouts'
import { TextStyles } from '../../../styles'
import ModalDeleteStyles from './ModalDelete.style'
import { useDispatch, useSelector } from 'react-redux'

const ModalDelete = () =>{

    const dispatch = useDispatch()
    const [modalState] = useSelector(state => state.modals.filter(modal => modal.name === 'delete'))
    
    const [showModal, setShowModal] = useState(modalState.showModal)

    return(
        <ModalLayout
            visibleModal={showModal}
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