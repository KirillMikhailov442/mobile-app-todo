import React, { useEffect, useState } from 'react'

import { IntroLayout } from '../../layouts'
import IntroContent from './IntroContent/IntroContent'
import { IIntroContent } from '../../types'
import { IntroProps } from '../../types/navigation'



const introContent: IIntroContent[] = 
     [
        {
            title: 'Manage your tasks',
            subtitle: 'You can easily manage all of your daily tasks in DoMe for free',
            imageUrl: require('../../assets/images/intro/intro-1.png')
        },

        {
            title: 'Create daily routine',
            subtitle: 'In Uptodo  you can create your personalized routine to stay productive',
            imageUrl: require('../../assets/images/intro/intro-2.png')
        },
        
        {
            title: 'Orgonaize your tasks',
            subtitle: 'You can organize your daily tasks by adding your tasks into separate categories',
            imageUrl: require('../../assets/images/intro/intro-3.png')
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
                subtitle={introContent[index - 1].subtitle} 
                imageUrl={introContent[index - 1].imageUrl}/>
        </IntroLayout>
    )
}

export default IntroScreen