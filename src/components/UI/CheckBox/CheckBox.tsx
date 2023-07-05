import React from 'react'

import CheckBoxStyles from './CheckBox.style'
import { Pressable, View } from 'react-native'
import { CheckBoxProps } from '../../../types'

const CheckBox:React.FC<CheckBoxProps> = ({
    value,
    onChange,
    styles
}) =>{

    return(
        <Pressable 
            onPress={onChange}
            style={[
                CheckBoxStyles.container,
                styles?.container
        ]}>
            <View style={[
                CheckBoxStyles.checkBox,
                value && CheckBoxStyles.checkBoxActive,
                styles?.checkbox,
            ]}>

            </View>
        </Pressable>
    )
}

export default CheckBox