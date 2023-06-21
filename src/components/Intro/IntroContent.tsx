import React from "react"
import { View, Text, Image } from "react-native"

import IntroContentStyles from "./IntroContent.style"
import { TextStyles } from "../../styles"
import IntrocontentIndicator from "./IntroContentIndicator"


interface IntroContentProps {
    title: string,
    subTilte: string,
    imageUrl: string
}


const IntroContent = ({
    title,
    subTilte,
    imageUrl
}:IntroContentProps) =>{
    
    
    return(
        <View style={IntroContentStyles.container}>
            <Image style={IntroContentStyles.image} source={require('../../assets/images/intro/intro-1.png')}/>
            <IntrocontentIndicator/>
            <Text style={[
                TextStyles.text,
                TextStyles.textCenter,
                IntroContentStyles.title
            ]}>
                {title}
            </Text>
            <Text style={[
                TextStyles.text,
                TextStyles.textCenter,
                IntroContentStyles.subTitle
            ]}>
                {subTilte}
            </Text>
        </View>
    )
}

export default IntroContent