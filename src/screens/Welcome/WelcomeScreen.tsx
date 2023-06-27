import React from "react"

import { NavigationProps } from "../../types/navigation";
import Welcome from "../../components/Welcome/Welcome"

const WelcomeScreen: React.FC<Pick<NavigationProps, 'navigation'>> = ({navigation}) =>{
    return(
        <Welcome navigation={navigation}/>
    )
}

export default WelcomeScreen