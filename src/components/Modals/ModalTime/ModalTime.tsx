import React, { useState } from "react";
import { Text, View } from "react-native";

import { ModalLayout } from "../../../layouts";
import BoxList from "../../UI/BoxList/BoxList";
import ModalTimeStyles from "./ModalTime.style";
import { useDispatch, useSelector } from "react-redux";

const numbersTime:number[] = []

for (let index = 1; index <= 60; index++) {
    numbersTime.push(index)
    
}



const ModalTime = () =>{

    const dispatch = useDispatch()
    const [modalState] = useSelector(state => state.modals.filter(modal => modal.name === 'time'))

    const [showModal, setShowModal] = useState(modalState.showModal)

    return(
        <ModalLayout
            title="Choose Time"
            visibleModal={showModal}
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