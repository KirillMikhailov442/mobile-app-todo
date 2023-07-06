import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { ModalLayout } from '../../../layouts'
import { View } from 'react-native'
import ModalCategoryStyles from './ModalCategory.style'
import { MiniCard } from '../../UI'
import { FlatGrid } from 'react-native-super-grid'
import { buttonColors } from '../../../constants/colors'
import { NavigationProps } from '../../../types/navigation'
import { useNavigation } from '@react-navigation/native'

interface ICategory {
    text: string,
    iconName: string
}

const categories: ICategory[] = [
    {
        text: 'Grocery',
        iconName: 'food',
    },
    {
        text: 'Work',
        iconName: 'firework',
    },
    {
        text: 'Sport',
        iconName: 'car-sports',
    },
    {
        text: 'Design',
        iconName: 'video-input-component',
    },
    {
        text: 'University',
        iconName: 'school',
    },
    {
        text: 'social',
        iconName: 'social-distance-2-meters',
    },
    {
        text: 'Music',
        iconName: 'music',
    },
    {
        text: 'Health',
        iconName: 'heart',
    },
    {
        text: 'Movie',
        iconName: 'video',
    },
    {
        text: 'Home',
        iconName: 'home',
    },
    {
        text: 'Create new',
        iconName: 'plus',
    },
]

const ModalCategory: React.FC<Pick<NavigationProps, 'navigation'>> = ({navigation}) =>{

    const [visible, setVisible] = useState(true)

    return(
        <ModalLayout
            title='Choose Category'
            visibleModal={visible}
            onPressButton={()=> {
                setVisible(false)
                navigation.navigate('categories')
            }}
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
                    <FlatGrid
                        data={categories}
                        itemDimension={80}
                        itemContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
                        renderItem={({item}) => 
                            <MiniCard 
                                bottomLabel={item.text}
                                styles={{card: {backgroundColor: buttonColors.violetDefault}}} 
                                icon={<Icon size={25} name={item.iconName} color={'white'}/>}/>}/>
                </View>
                
        </ModalLayout>
    )
}

export default ModalCategory