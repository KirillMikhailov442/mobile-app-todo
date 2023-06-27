import React from "react"
import { useNavigation } from "@react-navigation/native"

import LoginForm from "../../components/LoginForm/LoginForm"
import { NavigationProps } from "../../types/navigation"



const LoginScreen: React.FC<Pick<NavigationProps, 'navigation'>> = ({navigation}) =>{

    return(
        <LoginForm navigation={navigation}/>
    )
}

export default LoginScreen