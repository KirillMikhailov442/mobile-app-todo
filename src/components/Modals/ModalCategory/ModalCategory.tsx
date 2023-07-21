import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { FlatGrid } from 'react-native-super-grid'
import { View } from 'react-native'

import { ModalLayout } from '../../../layouts'
import ModalCategoryStyles from './ModalCategory.style'
import { MiniCard } from '../../UI'
import { buttonColors } from '../../../constants/colors'
import { useDispatch, useSelector } from 'react-redux'
import { hideModal } from '../../../store/slices/modalsSlice'

interface ICategory {
    text: string,
    iconName: string
}

// const categories: ICategory[] = [
//     {
//         text: 'Grocery',
//         iconName: 'food',
//     },
//     {
//         text: 'Work',
//         iconName: 'firework',
//     },
//     {
//         text: 'Sport',
//         iconName: 'car-sports',
//     },
//     {
//         text: 'Design',
//         iconName: 'video-input-component',
//     },
//     {
//         text: 'University',
//         iconName: 'school',
//     },
//     {
//         text: 'social',
//         iconName: 'social-distance-2-meters',
//     },
//     {
//         text: 'Music',
//         iconName: 'music',
//     },
//     {
//         text: 'Health',
//         iconName: 'heart',
//     },
//     {
//         text: 'Movie',
//         iconName: 'video',
//     },
//     {
//         text: 'Home',
//         iconName: 'home',
//     },
//     {
//         text: 'Create new',
//         iconName: 'plus',
//     },
// ]

const ModalCategory = () =>{

    const dispatch = useDispatch()
    const [modalState] = useSelector(state => state.modals.filter(modal => modal.name === 'category'))

    const categories = useSelector(state => state.categories)
    console.log(categories);
    

    const [showModal, setShowModal] = useState(modalState.showModal)

    useEffect(()=> {
        setShowModal(modalState.showModal)
    }, [modalState])

    return(
        <ModalLayout
            title='Choose Category'
            visibleModal={showModal}
            onPressButton={()=> dispatch(hideModal('category'))}
            onBackdropPress={()=> dispatch(hideModal('category'))}
            buttons={{
                right: {
                    text: 'Add Category',
                    styles: {
                        button: {
                            width: '100%'
                        }
                    }
                }
            }}
            >
                <View style={ModalCategoryStyles.grid}>
                    {/* <FlatGrid
                        data={categories}
                        itemDimension={80}
                        itemContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
                        renderItem={({item}) => 
                            <MiniCard 
                                bottomLabel={item.text}
                                styles={{card: {backgroundColor: buttonColors.violetDefault}}} 
                                icon={<Icon size={25} name={item.iconName} color={'white'}/>}/>}/> */}
                </View>
                
        </ModalLayout>
    )
}

export default ModalCategory