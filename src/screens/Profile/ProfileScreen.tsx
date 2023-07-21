import React from 'react'
import {Text, ScrollView, View} from 'react-native'
import { useDispatch } from 'react-redux'

import { ViewStyles } from '../../styles'
import ProfileScreenStyles from './ProfileScreen.style'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import { Avatar} from '../../components/UI'
import ProfileButtons from './ProfileButtons/ProfileButtons'
import ProfileList from './ProfileList/ProfileList'
import { ModalChangeName, ModalChangePassword } from '../../components/Modals'
import { BottomSheetAddTask, BottomSheetChangeImage } from '../../components/BottomSheet'
import AddTask from '../../components/AddTask/AddTask'
import { showBottomSheet } from '../../store/slices/bottomSheetSlice'

const ProfileScreen = () =>{

    const dispatch = useDispatch()

    return(
        <View style={ViewStyles.fullScreen}>
            <ProfileHeader/>
            <ScrollView style={[ViewStyles.container, ProfileScreenStyles.container]}>
            <Avatar 
                isActive
                onPress={()=> dispatch(showBottomSheet('changeImage'))}
                style={ProfileScreenStyles.avatar}/>
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