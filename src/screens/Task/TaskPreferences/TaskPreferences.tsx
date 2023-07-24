import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import { useDispatch } from 'react-redux'

import { textColors } from '../../../constants/colors'
import { Preference } from '../../../components'
import { Button } from '../../../components/UI'
import TaskScreenStyles from '../TaskScreen.style'
import { hideModal, showModal } from '../../../store/slices/modalsSlice'
import { isSmallScreenSize } from '../../../constants/size'

const iconSize = isSmallScreenSize ? 20 : 25

const TaskPreferences = () =>{

    const dispatch = useDispatch()

    return(
            <>
                <Preference
                    text="Task Time :"
                    onPress={()=> dispatch(showModal('calendar'))}
                    icon={<Icon name="timer-outline" color={textColors.whiteDefault} size={iconSize}/>}
                    button={<Button 
                            text='Today At 16:45' 
                            onPress={()=> dispatch(showModal('calendar'))}
                            styles={{button: TaskScreenStyles.preferenceButton, text: TaskScreenStyles.preferenceButtonText}}/>} 
                    styles={{container: TaskScreenStyles.preference}}/>

                <Preference
                    text="Task Category :"
                    onPress={()=> dispatch(showModal('category'))}
                    icon={<Icon name="tag-outline" color={textColors.whiteDefault} size={iconSize}/>}
                    button={<Button 
                            text='University' 
                            positinIcon='left'
                            onPress={()=> dispatch(showModal('category'))}
                            icon={<Icon name='school-outline' color={'blue'} size={iconSize} style={{marginRight: 10}}/>}
                            styles={{button: TaskScreenStyles.preferenceButton, text: TaskScreenStyles.preferenceButtonText}}/>} 
                    styles={{container: TaskScreenStyles.preference}}/>

                <Preference
                    text="Task Priority :"
                    onPress={()=> dispatch(showModal('priority'))}
                    icon={<Icon name="flag-outline" color={textColors.whiteDefault} size={iconSize}/>}
                    button={<Button 
                            text='Default'
                            onPress={()=> dispatch(hideModal('priority'))}
                            styles={{button: TaskScreenStyles.preferenceButton, text: TaskScreenStyles.preferenceButtonText}}/>} 
                    styles={{container: TaskScreenStyles.preference}}/>

                <Preference
                    text="Sub - Task"
                    icon={<IconIonicons name="git-merge-outline" color={textColors.whiteDefault} size={iconSize}/>}
                    button={<Button text='Add Sub - Task' styles={{button: TaskScreenStyles.preferenceButton, text: TaskScreenStyles.preferenceButtonText}}/>} 
                    styles={{container: TaskScreenStyles.preference}}/>

                <Preference
                    text="Delete Task"
                    onPress={()=> dispatch(showModal('delete'))}
                    icon={<Icon
                            name="trash-can-outline" 
                            color={textColors.red} 
                            size={iconSize}/>}
                    showButton={false}
                    styles={{
                        container: TaskScreenStyles.preference,
                        text: TaskScreenStyles.preferenceTextDelete
                    }}/>
            </>
    )
}

export default TaskPreferences