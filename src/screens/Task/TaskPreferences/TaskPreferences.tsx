import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconIonicons from 'react-native-vector-icons/Ionicons'

import { textColors } from '../../../constants/colors'
import { Preference } from '../../../components'
import { Button } from '../../../components/UI'
import TaskScreenStyles from '../TaskScreen.style'


const TaskPreferences = () =>{
    return(
            <>
                <Preference
                    text="Task Time :"
                    icon={<Icon name="timer-outline" color={textColors.whiteDefault} size={25}/>}
                    button={<Button text='Today At 16:45' styles={{button: TaskScreenStyles.preferenceButton}}/>} 
                    styles={{container: TaskScreenStyles.preference}}/>

                <Preference
                    text="Task Category :"
                    icon={<Icon name="tag-outline" color={textColors.whiteDefault} size={25}/>}
                    button={<Button 
                            text='University' 
                            positinIcon='left'
                            icon={<Icon name='school-outline' color={'blue'} size={25} style={{marginRight: 10}}/>}
                            styles={{button: TaskScreenStyles.preferenceButton}}/>} 
                    styles={{container: TaskScreenStyles.preference}}/>

                <Preference
                    text="Task Priority :"
                    icon={<Icon name="flag-outline" color={textColors.whiteDefault} size={25}/>}
                    button={<Button text='Default' styles={{button: TaskScreenStyles.preferenceButton}}/>} 
                    styles={{container: TaskScreenStyles.preference}}/>

                <Preference
                    text="Sub - Task"
                    icon={<IconIonicons name="git-merge-outline" color={textColors.whiteDefault} size={25}/>}
                    button={<Button text='Add Sub - Task' styles={{button: TaskScreenStyles.preferenceButton}}/>} 
                    styles={{container: TaskScreenStyles.preference}}/>

                <Preference
                    text="Delete Task"
                    icon={<Icon
                            name="trash-can-outline" 
                            color={textColors.red} 
                            size={25}/>}
                    showButton={false}
                    styles={{
                        container: TaskScreenStyles.preference,
                        text: TaskScreenStyles.preferenceText
                    }}/>
            </>
    )
}

export default TaskPreferences