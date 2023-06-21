
import React, {JSX} from 'react'
import {View} from 'react-native'
import IntroLayoutStyles from './IntroLayout.style'
import Button from '../../components/UI/Button/Button'
import { buttonColors, textColors } from '../../constants/colors'

interface IntroLayoutProps {
    children: JSX.Element
}


const IntroLayout = ({children}: IntroLayoutProps) =>{

    return(
        <View style={IntroLayoutStyles.container}>
            <View style={IntroLayoutStyles.header}>
                <Button
                    text="SKIP" 
                    color={textColors.gray} 
                    width={40}
                    // callback={()=> navigation.navigate('welcome')}
                     />
            </View>
            {children}
            <View style={IntroLayoutStyles.footer}>
                <Button 
                    text="BACK" 
                    color={textColors.gray} 
                    width={45} />
                <Button 
                    text="NEXT" 
                    background={buttonColors.violetDefault} 
                    width={90} />
            </View>
        </View>
    )
}

export default IntroLayout