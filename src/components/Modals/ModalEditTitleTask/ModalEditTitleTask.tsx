import React, { useEffect, useState } from 'react'

import { ModalLayout } from '../../../layouts'
import { Input } from '../../UI'
import { bgColors } from '../../../constants/colors'
import { useDispatch, useSelector } from 'react-redux'
import { hideModal } from '../../../store/slices/modalsSlice'

const ModalEditTask = () =>{

    const dispatch = useDispatch()
    const [modalState] = useSelector(state => state.modals.filter(modal => modal.name === 'editTitle'))

    
    const [showModal, setShowModal] = useState(modalState.showModal)

    useEffect(()=>{
        setShowModal(modalState.showModal)
    }, [modalState])

    
    return(
        <ModalLayout
            title='Edit Task title'
            visibleModal={showModal}
            onBackdropPress={()=> dispatch(hideModal('editTitle'))}
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
                        placeholder={{
                            text: 'Description'
                        }}
                        value='Do math homework'
                        styles={{
                            input: {
                                height: 40,
                                backgroundColor: bgColors.transparent,
                                marginTop: 16
                            }
                        }}/>

                    <Input
                        placeholder={{
                            text: 'Description'
                        }}
                        value='Do chapter 2 to 5 for next week'
                        styles={{
                            input: {
                                height: 40,
                                backgroundColor: bgColors.transparent,
                                marginTop: 16
                            }
                        }}/>
                </>
        </ModalLayout>
    )
}

export default ModalEditTask