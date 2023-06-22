
import React, {JSX, useEffect, useState} from 'react'
import {View} from 'react-native'


import IntroLayoutStyles from './IntroLayout.style'
import Button from '../../components/UI/Button/Button'
import { buttonColors, textColors } from '../../constants/colors'
import { ViewStyles } from '../../styles'
import { LayoutProps } from '../../types'
import { IntroScreenNavigationProp, IntroScreenRouteProp } from '../../types/navigation/IntroProps'

interface IntroLayoutProps extends LayoutProps {
    navigation: IntroScreenNavigationProp,
    route: IntroScreenRouteProp,
    limit: number,
    index: number
}


const IntroLayout: React.FC<IntroLayoutProps> = ({children, navigation, limit, index}) =>{

    const [isBack, setIsBack] = useState(false)
    const [isFinish, setIsFinish] = useState(false)

    
    useEffect(()=>{
        setIsBack(index <= 1 ? false : true)
        setIsFinish(index >= limit ? true : false)

    }, [index])


    
    return(
        <View style={ViewStyles.container}>
            <View style={IntroLayoutStyles.header}>
                <Button
                    text="SKIP" 
                    color={textColors.gray} 
                    width={40}
                    callback={()=> navigation.navigate('welcome')}
                     />
            </View>
            {children}
            <View style={IntroLayoutStyles.footer}>
                <Button 
                    text="BACK" 
                    color={isBack ? textColors.gray : textColors.black} 
                    width={45}
                    isActivated={isBack}
                    callback={()=> navigation.navigate('intro', {screenId: --index})} />
                <Button 
                    text={isFinish ? "FINISH" : "NEXT"}
                    background={buttonColors.violetDefault} 
                    width={90} 
                    callback={()=> {
                        if(isFinish){
                            return navigation.navigate('welcome')
                        }

                        return navigation.navigate('intro', {screenId: ++index})
                    }}/>
            </View>
        </View>
    )
}

export default IntroLayout