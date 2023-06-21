import React from "react"
import { IntroLayout } from "../../layouts"
import IntroContent from "../../components/Intro/IntroContent"


const IntroScreen = () =>{
    return(
        <IntroLayout>
            <IntroContent title="Manage your tasks" subTilte="You can easily manage all of your daily tasks in DoMe for free" imageUrl="../../assets/images/intro/intro-1.png"/>
        </IntroLayout>
    )
}

export default IntroScreen