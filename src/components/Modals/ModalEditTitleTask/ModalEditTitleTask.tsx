import React from 'react'

import { ModalLayout } from '../../../layouts'
import { Input } from '../../UI'
import { bgColors } from '../../../constants/colors'

const ModalEditTask = () =>{
    return(
        <ModalLayout
            title='Edit Task title'
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