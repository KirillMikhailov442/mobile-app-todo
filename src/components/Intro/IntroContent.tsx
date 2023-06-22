import React from "react"
import { View, Text, Image } from "react-native"

import IntroContentStyles from "./IntroContent.style"
import { TextStyles } from "../../styles"
import IntroContentIndicator from "./IntroContentIndicator"


interface IntroContentProps {
    index: number,
    limit: number,
    title: string,
    subTilte: string,
    imageUrl?: string
}


const IntroContent = ({
    title,
    subTilte,
    imageUrl,
    index,
    limit
}:IntroContentProps) =>{
    
    
    return(
        <View style={IntroContentStyles.container}>
            <Image style={IntroContentStyles.image} source={require('../../assets/images/intro/intro-1.png')}/>
            <IntroContentIndicator limit={limit} index={index}/>
            <Text style={[
                TextStyles.text,
                TextStyles.textCenter,
                TextStyles.title,
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