import React from 'react'
import {Text} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { HeaderLayout } from '../../../layouts'
import { Avatar } from '../../../components/UI'
import HomeHeaderStyles from './HomeHeader.style'
import { textColors } from '../../../constants/colors'
import { useAppNavigation } from '../../../hooks'
import { isSmallScreenSize } from '../../../constants/size'


const HomeHeader = () =>{

    const navigation = useAppNavigation()

    return(
        <HeaderLayout styles={{ header: HomeHeaderStyles.container }}>
            <>
                <Icon
                    name='menu'
                    color={textColors.whiteDefault}
                    size={isSmallScreenSize ? 25 : 30}/>
                <Text style={HomeHeaderStyles.title}>Home</Text>
                <Avatar 
                    isActive 
                    style={{height: isSmallScreenSize ? 32: 42, width: isSmallScreenSize ? 32 : 42}}
                    onPress={()=> navigation.navigate('profile')}/>
            </>
        </HeaderLayout>
    )
}

export default HomeHeader