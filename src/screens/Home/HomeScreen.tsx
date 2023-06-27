import React from "react"
import { View } from "react-native"
import { NavigationProps } from "../../types/navigation"
import Button from "../../components/UI/Button/Button"
import { ViewStyles } from "../../styles"
import { bgColors } from "../../constants/colors"

const HomeScreen: React.FC<Pick<NavigationProps, 'navigation'>> = ({navigation}) =>{

    return(
        <View style={[ViewStyles.container, {backgroundColor: bgColors.blackDefault}]}>
        </View>
    )
}

export default HomeScreen