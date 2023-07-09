import React, { useState } from 'react';
import {  View } from 'react-native';
import Modal from 'react-native-modal';

import BottomSheetAddTaskStyles from './BottomSheetAddTask.style';
import { FormLayout } from '../../../layouts';
import { Input } from '../../UI';
import BottomSheetFooter from './BottomSheetAddTaskFooter/BottomSheetAddTaskFooter';

const BottomSheetAddTask = () =>{

    const [showModal, setShowModal] = useState(true)

    return(
        <Modal 
            isVisible={showModal}
            onBackdropPress={()=> setShowModal(false)}
            swipeDirection="down" 
            style={{margin: 0}}>
            <View style={BottomSheetAddTaskStyles.container}>
                <FormLayout 
                    title='Add Task'
                    styles={{
                        container: BottomSheetAddTaskStyles.form,
                        title: BottomSheetAddTaskStyles.title
                    }}>
                    <>
                        <Input
                            placeholder={{
                                text: 'Description'
                            }}
                            styles={{
                                container: BottomSheetAddTaskStyles.inputContainer,
                                input: BottomSheetAddTaskStyles.input,
                            }}/>

                        <Input
                            placeholder={{
                                text: 'Description'
                            }}
                            styles={{
                                container: BottomSheetAddTaskStyles.inputContainer,
                                input: BottomSheetAddTaskStyles.input,
                            }}/>
                            
                        <BottomSheetFooter/>
                    </>
                </FormLayout>
            </View>
        </Modal>
    )
}


export default BottomSheetAddTask;