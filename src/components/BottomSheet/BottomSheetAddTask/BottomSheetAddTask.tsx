import React, { useEffect, useState } from 'react';
import {  View } from 'react-native';
import Modal from 'react-native-modal';
import { useDispatch, useSelector } from 'react-redux';

import BottomSheetAddTaskStyles from './BottomSheetAddTask.style';
import { FormLayout } from '../../../layouts';
import { Input } from '../../UI';
import BottomSheetFooter from './BottomSheetAddTaskFooter/BottomSheetAddTaskFooter';
import { hideBottomSheet } from '../../../store/slices/bottomSheetSlice';

const BottomSheetAddTask = () =>{

    const dispatch = useDispatch()
    const [bottomSheetState] = useSelector(state => state.bottomSheets.filter(item => item.name === 'addTask'))
    
    const [showBottomSheet, setShowBottomSheet] = useState(bottomSheetState.showBottomSheet)

    
    useEffect(()=>{
        setShowBottomSheet(bottomSheetState.showBottomSheet)
    }, [bottomSheetState])
    

    return(
        <Modal 
            isVisible={showBottomSheet}
            onBackdropPress={()=> dispatch(hideBottomSheet('addTask')) }
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
                            isMultiline
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