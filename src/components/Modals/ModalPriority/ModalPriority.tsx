import React from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { View } from "react-native";

import { ModalLayout } from "../../../layouts";
import MiniCard from "../../UI/MiniCard/MiniCard";
import ModalPriorityStyles from "./ModalPriority.style";
import { textColors } from "../../../constants/colors";


const dataTaskPriority = [
    {
        icon: 'flag',
        number: 1
    },
    {
        icon: 'flag',
        number: 2
    },
    {
        icon: 'flag',
        number: 3
    },
    {
        icon: 'flag',
        number: 4
    },
    {
        icon: 'flag',
        number: 5
    },
    {
        icon: 'flag',
        number: 6
    },
    {
        icon: 'flag',
        number: 7
    },
    {
        icon: 'flag',
        number: 8
    },
    {
        icon: 'flag',
        number: 9
    },
    {
        icon: 'flag',
        number: 10
    },
]

const ModalPriority = () =>{

    
    return(
        <ModalLayout
            title="Task Priority"
            visibleModal={true}
            buttons={{
                left: {
                    text: 'Cancel'
                },
                right: {
                    text: 'Save'
                }
            }}>
            <View style={ModalPriorityStyles.grid}>
                {dataTaskPriority.map(({icon, number}) => 
                    <MiniCard 
                        cardText={number}
                        styles={{container: {margin: 8}}}
                        icon={<Icon name={icon} size={25} color={textColors.whiteDefault}/>}/>)}
            </View>
        </ModalLayout>
    )
}

export default ModalPriority