import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { Button, CheckBox } from '../../UI'
import ToDoItemStyles from './ToDoItem.style'
import { ToDoItemProps } from '../../../types'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ToDoItem: React.FC<ToDoItemProps> = ({
    text,
    check,
    details,
    completed
}) =>{

    const [value, setValue] = useState(check)


    if(completed){
        return(
            <View
            style={ToDoItemStyles.container}>
            <CheckBox
                value={value}
                onChange={()=> setValue(prev => !prev)}
                styles={{container: ToDoItemStyles.checkBox}}/>
            <View style={ToDoItemStyles.content}>
                <Text style={ToDoItemStyles.text}>{text}</Text>
                <View style={ToDoItemStyles.details}>
                    <Text style={ToDoItemStyles.detailsDate}>{details.date}</Text>
                </View>
            </View>
        </View>
        )
    }
    
    return(
        <TouchableOpacity
            onPress={()=> setValue(prev => !prev)}
            style={ToDoItemStyles.container}>
            <CheckBox
                value={value}
                onChange={()=> setValue(prev => !prev)}
                styles={{container: ToDoItemStyles.checkBox}}/>
            <View style={ToDoItemStyles.content}>
                <Text style={ToDoItemStyles.text}>{text}</Text>
                <View style={ToDoItemStyles.details}>
                    <Text style={ToDoItemStyles.detailsDate}>{details.date}</Text>
                    {details.category && 
                        <Button 
                            text={details.category}
                            isActive={false}
                            icon={<Icon name='school' size={14} color={'white'} style={{marginRight: 5}}/>}
                            styles={{
                                button: {...ToDoItemStyles.detailsButton, ...ToDoItemStyles.detailsButtonCategory},
                                text: ToDoItemStyles.detailsButtonText
                            }}/>}

                    {details.priority && 
                        <Button 
                            text={`${details.priority}`}
                            isActive={false}
                            icon={<Icon name='flag' size={14} color={'white'} style={{marginRight: 5}}/>}
                            styles={{
                                button: {...ToDoItemStyles.detailsButton, ...ToDoItemStyles.detailsButtonPriority},
                                text: ToDoItemStyles.detailsButtonText
                        }}/>}
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ToDoItem