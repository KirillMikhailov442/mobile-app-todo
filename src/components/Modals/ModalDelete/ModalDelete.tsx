import React from 'react'
import {Text} from 'react-native'

import { ModalLayout } from '../../../layouts'
import { TextStyles } from '../../../styles'
import ModalDeleteStyles from './ModalDelete.style'

const ModalDelete = () =>{
    return(
        <ModalLayout
            visibleModal={true}
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