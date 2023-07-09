import React, { useEffect, useState } from "react"
import { Text, Image, View } from "react-native"

import IntroContentStyles from "./IntroContent.style"
import { TextStyles } from "../../../styles"
import IntroContentIndicator from "./IntroContentIndicator"

interface IntroContentProps {
    index: number,
    limit: number,
    title: string,
    subtitle: string,
    imageUrl?: string
}



const IntroContent = ({
    title,
    subtitle,
    index,
    limit,
    imageUrl
}:IntroContentProps) =>{

    
    return(
        <View style={IntroContentStyles.container}>
            <Image 
                style={IntroContentStyles.image} 
                source={imageUrl}/>
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
                IntroContentStyles.subtitle
            ]}>
                {subtitle}
            </Text>
        </View>
    )
}

export default IntroContent