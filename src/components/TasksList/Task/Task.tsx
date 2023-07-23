import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Button, CheckBox } from '../../UI'
import TaskStyles from './Task.style'
import {TaskProps} from '../../../types'
import { useAppNavigation, useAppSelector } from '../../../hooks'

const Task: React.FC<TaskProps> = ({
    text,
    check,
    details,
    completed,
}) =>{

    const [value, setValue] = useState(check)

    const navigation = useAppNavigation()

    const [category] = useAppSelector(state => state.categories.filter(item => item.text === details.category))

    if(completed){
        return(
            <View
            style={TaskStyles.container}>
            <CheckBox
                value={value}
                onChange={()=> setValue(prev => !prev)}
                styles={{container: TaskStyles.checkBox}}/>
            <View style={TaskStyles.content}>
                <Text style={TaskStyles.text}>{text}</Text>
                <View style={TaskStyles.details}>
                    <Text style={TaskStyles.detailsDate}>{details.date}</Text>
                </View>
            </View>
        </View>
        )
    }
    
    return(
        <TouchableOpacity
            onLongPress={()=> navigation.navigate('task')}
            onPress={()=> setValue(prev => !prev)}
            style={TaskStyles.container}>
            <CheckBox
                value={value}
                onChange={()=> setValue(prev => !prev)}
                styles={{container: TaskStyles.checkBox}}/>
            <View style={TaskStyles.content}>
                <Text style={TaskStyles.text}>{text}</Text>
                <View style={TaskStyles.details}>
                    <Text style={TaskStyles.detailsDate}>{details.date}</Text>
                    {details.category && 
                        <Button 
                            text={details.category}
                            isActive={false}
                            icon={<Icon 
                                name={category.iconName} 
                                size={14} 
                                color={category.iconColor} 
                                style={{marginRight: 5, color: category.iconColor}}/>}
                            styles={{
                                button: {
                                    ...TaskStyles.detailsButton, 
                                    ...TaskStyles.detailsButtonCategory,
                                    backgroundColor: category.color},
                                text: TaskStyles.detailsButtonText
                            }}/>}

                    {details.priority && 
                        <Button 
                            text={`${details.priority}`}
                            isActive={false}
                            icon={<Icon name='flag' size={14} color={'white'} style={{marginRight: 5}}/>}
                            styles={{
                                button: {...TaskStyles.detailsButton, ...TaskStyles.detailsButtonPriority},
                                text: TaskStyles.detailsButtonText
                        }}/>}
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Task