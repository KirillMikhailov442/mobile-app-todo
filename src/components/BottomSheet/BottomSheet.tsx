import React, { useState } from 'react';
import {  View } from 'react-native';
import Modal from 'react-native-modal';

import BottomSheetStyles from './BottomSheet.style';
import { FormLayout } from '../../layouts';
import { Input } from '../UI';
import BottomSheetFooter from './BottomSheetFooter/BottomSheetFooter';

const BottomSheet = () =>{

    const [showModal, setShowModal] = useState(false)

    return(
        <Modal 
            isVisible={showModal}
            onBackdropPress={()=> setShowModal(false)}
            swipeDirection="down" 
            style={{margin: 0}}>
            <View style={BottomSheetStyles.container}>
                <FormLayout 
                    title='Add Task'
                    styles={{
                        container: BottomSheetStyles.form,
                        title: BottomSheetStyles.title
                    }}>
                    <>
                        <Input
                            placeholder={{
                                text: 'Description'
                            }}
                            styles={{
                                container: BottomSheetStyles.inputContainer,
                                input: BottomSheetStyles.input,
                            }}/>

                        <Input
                            placeholder={{
                                text: 'Description'
                            }}
                            styles={{
                                container: BottomSheetStyles.inputContainer,
                                input: BottomSheetStyles.input,
                            }}/>
                            
                        <BottomSheetFooter/>
                    </>
                </FormLayout>
            </View>
        </Modal>
    )
}


export default BottomSheet;