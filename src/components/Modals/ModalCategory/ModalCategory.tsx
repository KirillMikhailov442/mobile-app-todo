import React, { useCallback, useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { FlatGrid } from 'react-native-super-grid'
import { View } from 'react-native'

import { ModalLayout } from '../../../layouts'
import { MiniCard } from '../../UI'
import ModalCategoryStyles from './ModalCategory.style'
import { hideModal } from '../../../store/slices/modalsSlice'
import { useAppSelector, useAppDispatch, useAppNavigation } from '../../../hooks'
import { hideBottomSheet } from '../../../store/slices/bottomSheetSlice'
import { ModalLayoutPropsButttons } from '../../../types/layouts/ModalLayoutProps'
import { isSmallScreenSize } from '../../../constants/size'

interface ModalCategoryProps {
    buttons?: ModalLayoutPropsButttons,
}

const ModalCategory: React.FC<ModalCategoryProps> = ({
    buttons
}) =>{

    const dispatch = useAppDispatch()
    const navigation = useAppNavigation()

    const [modalState] = useAppSelector(state => state.modals.filter(modal => modal.name === 'category'))

    const categoriesState = useAppSelector(state => state.categories)

    const [categories, setCategories] = useState(categoriesState)
    const [showModal, setShowModal] = useState(modalState.showModal)

    useEffect(()=> {
        setShowModal(modalState.showModal)
        setCategories(categoriesState)
    }, [modalState, categoriesState])


    const addCategory = useCallback(()=> {
        navigation.navigate('categories')
        dispatch(hideBottomSheet('addTask'))
        dispatch(hideModal('category'))
    }, [])

    return(
        <ModalLayout
            title='Choose Category'
            visibleModal={showModal}
            onPressButton={()=> dispatch(hideModal('category'))}
            onBackdropPress={()=> dispatch(hideModal('category'))}
            buttons={ buttons ?? {
                left: {
                    text: 'Cancel',
                    onPress: ()=> dispatch(hideModal('category'))
                },
                right: {
                    text: 'Add Category'
                }
            }}
            >
                <View style={ModalCategoryStyles.grid}>
                    <FlatGrid
                        data={[...categories, {text: 'Create new', iconName: 'plus', color: '#80FFD1', iconColor: "#00A369"}]}
                        itemDimension={isSmallScreenSize ? 60 : 80}
                        spacing={10}
                        itemContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
                        renderItem={({item}) => 
                            <MiniCard 
                                bottomLabel={item.text}
                                onPress={ ()=> item.iconName === 'plus' && addCategory()}
                                styles={{card: {backgroundColor: item.color}}} 
                                icon={<Icon 
                                    size={ isSmallScreenSize ? 25 : 35} 
                                    name={item.iconName} 
                                    color={item.iconColor}/>}
                            />}/>
                </View>
                
        </ModalLayout>
    )
}

export default ModalCategory