import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { CheckBox } from '../../../components/UI'
import ChangeableTaskStyles from './ChangeableTask.style'
import { textColors } from '../../../constants/colors'

const ChangeableTask = () =>{
    return(
        <View style={ChangeableTaskStyles.container}>
            <CheckBox value={false}/>
            <View style={ChangeableTaskStyles.content}>
                <Text style={ChangeableTaskStyles.title}>Do Math Homework</Text>
                <Text style={ChangeableTaskStyles.subtitle}>Do chapter 2 to 5 for next week</Text>
            </View>
            <Icon name='pencil' color={textColors.whiteDefault} size={25}/>
        </View>
    )
}

export default ChangeableTask