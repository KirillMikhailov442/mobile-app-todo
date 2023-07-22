import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { FlatGrid } from 'react-native-super-grid'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { ModalLayout } from '../../../layouts'
import { MiniCard } from '../../UI'
import ModalCategoryStyles from './ModalCategory.style'
import { buttonColors } from '../../../constants/colors'
import { hideModal } from '../../../store/slices/modalsSlice'
import { useAppSelector, useAppDispatch } from '../../../hooks'

interface ICategory {
    text: string,
    iconName: string
}

const ModalCategory = () =>{

    const dispatch = useAppDispatch()
    const navigation = useNavigation()

    const [modalState] = useAppSelector(state => state.modals.filter(modal => modal.name === 'category'))

    const categoriesState = useAppSelector(state => state.categories)

    const [categories, setCategories] = useState(categoriesState)
    const [showModal, setShowModal] = useState(modalState.showModal)

    useEffect(()=> {
        setShowModal(modalState.showModal)
        setCategories(categoriesState)
    }, [modalState, categoriesState])

    return(
        <ModalLayout
            title='Choose Category'
            visibleModal={showModal}
            onPressButton={()=> dispatch(hideModal('category'))}
            onBackdropPress={()=> dispatch(hideModal('category'))}
            buttons={{
                right: {
                    text: 'Add Category',
                    onPress: ()=> navigation.navigate('categories'),
                    styles: {
                        button: {
                            width: '100%'
                        }
                    }
                }
            }}
            >
                <View style={ModalCategoryStyles.grid}>
                    <FlatGrid
                        data={[...categories, {text: 'Create new', iconName: 'plus', color: '#80FFD1', iconColor: "#00A369"}]}
                        itemDimension={80}
                        itemContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
                        renderItem={({item}) => 
                            <MiniCard 
                                bottomLabel={item.text}
                                styles={{card: {backgroundColor: item.color}}} 
                                icon={<Icon size={25} name={item.iconName} color={item.iconColor}/>}/>}/>
                </View>
                
        </ModalLayout>
    )
}

export default ModalCategory