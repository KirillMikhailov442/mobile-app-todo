import React from "react"
import {Text} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { HeaderLayout } from "../../../layouts"
import { Avatar } from "../../../components/UI"
import HomeHeaderStyles from "./HomeHeader.style"
import { textColors } from "../../../constants/colors"
import { useNavigation } from "@react-navigation/native"


const HomeHeader = () =>{

    const navigation = useNavigation()

    return(
        <HeaderLayout styles={{ header: HomeHeaderStyles.container }}>
            <>
                <Icon
                    name="menu"
                    color={textColors.whiteDefault}
                    size={30}/>
                <Text style={HomeHeaderStyles.title}>Home</Text>
                <Avatar 
                    isActive 
                    onPress={()=> navigation.navigate('profile')}/>
            </>
        </HeaderLayout>
    )
}

export default HomeHeader