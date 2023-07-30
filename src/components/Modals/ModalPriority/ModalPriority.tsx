import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { View } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

import { ModalLayout } from '../../../layouts';
import MiniCard from '../../UI/MiniCard/MiniCard';
import ModalPriorityStyles from './ModalPriority.style';
import { textColors } from '../../../constants/colors';
import { hideModal } from '../../../store/slices/modalsSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { IPriority } from '../../../types';
import { selectPriority } from '../../../store/slices/prioritySlice';
import { isSmallScreenSize } from '../../../constants/size';



const ModalPriority = () =>{

    const dispatch = useAppDispatch()
    const [modalState] = useAppSelector(state => state.modals.filter(modal => modal.name === 'priority'))
    const prioritiesState = useAppSelector(state => state.priorities)
    
    const [showModal, setShowModal] = useState(modalState.showModal)
    const [priorities, setPriorities] = useState<IPriority[]>(prioritiesState)
    

    useEffect(()=>{
        setShowModal(modalState.showModal)
        setPriorities(prioritiesState)
    }, [modalState, prioritiesState])
    
    return(
        <ModalLayout
            title='Task Priority'
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
                <FlatGrid
                    data={priorities}
                    itemDimension={isSmallScreenSize ? 50 : 60}
                    spacing={10}
                    itemContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
                    renderItem={({item}) => 
                        <MiniCard
                            key={item.number}
                            cardText={item.number}
                            onPress={()=> dispatch(selectPriority(item.number))}
                            styles={{
                                container: ModalPriorityStyles.priorityCardContainer,
                                card: item.isSelected && ModalPriorityStyles.prioritySelectedCard
                            }}
                            icon={<Icon name={'flag'} size={isSmallScreenSize ? 20 : 25} color={textColors.whiteDefault}/>}
                            />}/>
            </View>
        </ModalLayout>
    )
}

export default ModalPriority