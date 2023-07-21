import React, { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { View } from "react-native";

import { ModalLayout } from "../../../layouts";
import MiniCard from "../../UI/MiniCard/MiniCard";
import ModalPriorityStyles from "./ModalPriority.style";
import { textColors } from "../../../constants/colors";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../../store/slices/modalsSlice";
import { useAppSelector } from "../../../hooks";
import { IPriority } from "../../../types";
import { selectPriority } from "../../../store/slices/prioritySlice";



const ModalPriority = () =>{

    const dispatch = useDispatch()
    const [modalState] = useSelector(state => state.modals.filter(modal => modal.name === 'priority'))
    const prioritiesState = useSelector(state => state.priorities)
    
    const [showModal, setShowModal] = useState(modalState.showModal)
    const [priorities, setPriorities] = useState<IPriority[]>(prioritiesState)
    

    useEffect(()=>{
        setShowModal(modalState.showModal)
        setPriorities(prioritiesState)
    }, [modalState, prioritiesState])
    
    return(
        <ModalLayout
            title="Task Priority"
            visibleModal={showModal}
            onBackdropPress={()=> dispatch(hideModal('priority'))}
            buttons={{
                left: {
                    text: 'Cancel'
                },
                right: {
                    text: 'Save'
                }
            }}>
            <View style={ModalPriorityStyles.grid}>
                {priorities.map(({icon, number, isSelected}: IPriority, index: number) => 
                    <MiniCard 
                        key={index}
                        cardText={number}
                        onPress={() => dispatch(selectPriority(number))}
                        styles={{
                                container: ModalPriorityStyles.priorityCardContainer,
                                card: isSelected && ModalPriorityStyles.prioritySelectedCard
                            }}
                        icon={<Icon name={icon} size={25} color={textColors.whiteDefault}/>}/>)}
            </View>
        </ModalLayout>
    )
}

export default ModalPriority