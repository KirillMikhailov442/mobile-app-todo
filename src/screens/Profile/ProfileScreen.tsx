import React from 'react'
import {Text, ScrollView, View} from 'react-native'

import { ViewStyles } from '../../styles'
import ProfileScreenStyles from './ProfileScreen.style'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import { Avatar} from '../../components/UI'
import ProfileButtons from './ProfileButtons/ProfileButtons'
import ProfileList from './ProfileList/ProfileList'
import { ModalCalendar, ModalCategory, ModalChangeName, ModalChangePassword, ModalPriority, ModalTime } from '../../components/Modals'
import { BottomSheetAddTask, BottomSheetChangeImage } from '../../components/BottomSheet'
import AddTask from '../../components/AddTask/AddTask'

const ProfileScreen = () =>{
    return(
        <View style={ViewStyles.fullScreen}>
            <ProfileHeader/>
            <ScrollView style={[ViewStyles.container, ProfileScreenStyles.container]}>
            <Avatar style={ProfileScreenStyles.avatar}/>
            <Text style={ProfileScreenStyles.fullName}>Martha Hays</Text>
            <ProfileButtons/>
            <ProfileList/>  
            </ScrollView>


            <ModalChangeName/>
            <ModalChangePassword/>
            <BottomSheetChangeImage/>
            <AddTask/>
        </View>
    )
}

export default ProfileScreen