import React from "react";
import { Text, View } from "react-native";

import { ModalLayout } from "../../../layouts";
import BoxList from "../../UI/BoxList/BoxList";
import ModalTimeStyles from "./ModalTime.style";

const numbersTime:number[] = []

for (let index = 1; index <= 60; index++) {
    numbersTime.push(index)
    
}



const ModalTime = () =>{
    return(
        <ModalLayout
            title="Choose Time"
            visibleModal={true}
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