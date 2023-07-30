import React from 'react'

import LoginForm from './LoginForm/LoginForm'
import { NavigationProps } from '../../types/navigation'



const LoginScreen: React.FC<Pick<NavigationProps, 'navigation'>> = ({navigation}) =>{

    return(
        <LoginForm navigation={navigation}/>
    )
}

export default LoginScreen