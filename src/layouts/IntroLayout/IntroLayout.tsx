
import React, {useEffect, useState} from 'react'
import {View, ScrollView} from 'react-native'


import IntroLayoutStyles from './IntroLayout.style'
import Button from '../../components/UI/Button/Button'
import { buttonColors, textColors } from '../../constants/colors'
import { ViewStyles } from '../../styles'
import { LayoutProps } from '../../types'
import { ScreensNavigationProp, ScreensRouteProp } from '../../types/navigation/NavigationProps'

interface IntroLayoutProps extends LayoutProps {
    navigation: ScreensNavigationProp,
    route: ScreensRouteProp,
    limit: number,
    index: number
}


const IntroLayout: React.FC<IntroLayoutProps> = ({
    children, 
    navigation, 
    limit, 
    index}) =>{

    const [isBack, setIsBack] = useState(false)
    const [isFinish, setIsFinish] = useState(false)

    
    useEffect(()=>{
        setIsBack(index <= 1 ? false : true)
        setIsFinish(index >= limit ? true : false)

    }, [index])


    
    return(
        <View style={[
            ViewStyles.container,
            ViewStyles.fullScreen]}>
            <View style={IntroLayoutStyles.header}>
                <Button
                    text="SKIP" 
                    styles={{
                        text: IntroLayoutStyles.buttonText,
                        button: IntroLayoutStyles.button
                    }}
                    onPress={()=> navigation.navigate('welcome')}
                     />
            </View>

            {children}
            
            <View style={IntroLayoutStyles.footer}>
                <Button 
                    text="BACK" 
                    styles={{
                        text: [{color : isBack ? textColors.grayDefault : textColors.black}, IntroLayoutStyles.buttonText],
                        button : IntroLayoutStyles.button
                    }}
                    isActive={isBack}
                    onPress={()=> navigation.navigate('intro', {screenId: --index})} />
                <Button 
                    text={isFinish ? "FINISH" : "NEXT"}
                    styles={{
                        button: [IntroLayoutStyles.button, {backgroundColor: buttonColors.violetDefault}],
                        text: [IntroLayoutStyles.buttonText, {color: textColors.whiteDefault}]
                    }}
                    onPress={()=> isFinish 
                        ?
                        navigation.navigate('welcome')
                        :
                        navigation.navigate('intro', {screenId: ++index})}/>
            </View>
        </View>
    )
}

export default IntroLayout