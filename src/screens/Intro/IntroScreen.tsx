import React, { useEffect, useState } from "react"
import { IntroLayout } from "../../layouts"
import IntroContent from "../../components/Intro/IntroContent"
import { useNavigation } from "@react-navigation/native"
import { IntroProps } from "../../types/navigation"
import { IIntroContent } from "../../types"


const introContent: IIntroContent[] = 
     [
        {
            title: "Manage your tasks",
            subTitle: 'You can easily manage all of your daily tasks in DoMe for free',
        },

        {
            title: "Create daily routine",
            subTitle: 'In Uptodo  you can create your personalized routine to stay productive',
        },
        
        {
            title: "Orgonaize your tasks",
            subTitle: 'You can organize your daily tasks by adding your tasks into separate categories',
        }
    ]


const IntroScreen: React.FC<IntroProps> = ({route, navigation}) =>{


    const [index, setIndex] = useState(route.params.screenId)
    
    useEffect(()=>{
        setIndex(route.params.screenId)
    }, [route.params.screenId])

    
    return(
        <IntroLayout 
            limit={introContent.length}
            index={index}
            navigation={navigation} 
            route={route}>
            <IntroContent 
                limit={introContent.length}
                index={index}
                title={introContent[index - 1].title} 
                subTilte={introContent[index - 1].subTitle} 
                imageUrl={introContent[index - 1].imageUrl}/>
        </IntroLayout>
    )
}

export default IntroScreen