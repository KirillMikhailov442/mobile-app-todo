import React from "react"
import {View} from 'react-native'
import IntroContentStyles from "./IntroContent.style"
import { bgColors, buttonColors } from "../../constants/colors"

const IntrocontentIndicator = () =>{
    return(
        <View style={IntroContentStyles.indicator}>
            <View style={[IntroContentStyles.indicatorItem, {backgroundColor: bgColors.white}]}></View>
            <View style={IntroContentStyles.indicatorItem}></View>
            <View style={IntroContentStyles.indicatorItem}></View>
        </View>
    )
}

export default IntrocontentIndicator