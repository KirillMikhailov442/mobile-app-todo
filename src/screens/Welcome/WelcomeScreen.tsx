import React from "react"

import { NavigationProps } from "../../types/navigation";
import WelcomeContent from "./WelcomeContent/WelcomeContent"

const WelcomeScreen: React.FC<Pick<NavigationProps, 'navigation'>> = ({navigation}) =>{
    return(
        <WelcomeContent navigation={navigation}/>
    )
}

export default WelcomeScreen