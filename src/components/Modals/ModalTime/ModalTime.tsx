import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { ModalLayout } from "../../../layouts";
import BoxList from "../../UI/BoxList/BoxList";
import ModalTimeStyles from "./ModalTime.style";
import { hideModal } from "../../../store/slices/modalsSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks";

const numbersTime:number[] = []

for (let index = 1; index <= 60; index++) {
    numbersTime.push(index)
    
}


const ModalTime = () =>{

    const dispatch = useAppDispatch()
    const [modalState] = useAppSelector(state => state.modals.filter(modal => modal.name === 'time'))

    const [showModal, setShowModal] = useState(modalState.showModal)

    useEffect(()=> {
        setShowModal(modalState.showModal)
    }, [modalState])

    return(
        <ModalLayout
            title="Choose Time"
            visibleModal={showModal}
            onBackdropPress={()=> dispatch(hideModal('time'))}
            buttons={{
                left: {
                    text: 'Cancel'
                },
                right: {
                    text: 'Save'
                }
            }}>
                <View style={ModalTimeStyles.content}>
                    <BoxList
                    data={numbersTime}/>
                    <Text style={ModalTimeStyles.colon}>:</Text>
                    <BoxList
                        data={numbersTime}/>
                    <BoxList 
                        data={['AM', 'PM']}
                        styles={{container: {marginLeft: 16}}}/>
                </View>
        </ModalLayout>
    )
}

export default ModalTime