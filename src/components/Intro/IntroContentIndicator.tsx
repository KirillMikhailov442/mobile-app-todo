import React, {useState, useEffect} from "react"
import {View} from 'react-native'

import IntroContentStyles from "./IntroContent.style"
import { bgColors, buttonColors } from "../../constants/colors"

interface IntroContentIndicatorProps {
    index: number,
    limit: number
}


const IntroContentIndicator: React.FC<IntroContentIndicatorProps> = ({index, limit}) =>{

    const flexBasis = 100 / limit - 4

    const [indicatior, setIndicatior] = useState(index)

    useEffect(()=>{
        setIndicatior(index)
    }, [index])
    
    

    return(
        <View style={IntroContentStyles.indicator}>
            <View 
                style={[
                    IntroContentStyles.indicatorItem, 
                    {flexBasis: `${flexBasis}%`,
                    backgroundColor: indicatior === 1 ? bgColors.white : bgColors.grayLight
                    }]}></View>
                <View 
                style={[
                    IntroContentStyles.indicatorItem, 
                    {flexBasis: `${flexBasis}%`,
                    backgroundColor: indicatior === 2 ? bgColors.white : bgColors.grayLight
                    }]}></View>
                <View 
                style={[
                    IntroContentStyles.indicatorItem, 
                    {flexBasis: `${flexBasis}%`,
                    backgroundColor: indicatior === 3 ? bgColors.white : bgColors.grayLight
                    }]}></View>
        </View>
    )
}

export default IntroContentIndicator