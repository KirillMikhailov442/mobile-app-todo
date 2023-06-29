import React from "react"
import {Text} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { HeaderLayout } from "../../../layouts"
import { Avatar } from "../../UI"
import HomeHeaderStyles from "./HomeHeader.style"
import { textColors } from "../../../constants/colors"


const HomeHeader = () =>{
    return(
        <HeaderLayout styles={{ header: HomeHeaderStyles.container }}>
            <>
                <Icon
                    name="menu"
                    color={textColors.whiteDefault}
                    size={30}/>
                <Text style={HomeHeaderStyles.title}>Home</Text>
                <Avatar/>
            </>
        </HeaderLayout>
    )
}

export default HomeHeader