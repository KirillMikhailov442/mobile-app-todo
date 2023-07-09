import React from 'react'
import {View} from 'react-native'
import { Button } from '../../../components/UI'
import ProfileButtonsStyles from './ProfileButtons.style'

const ProfileButtons = () =>{
    return(
        <View style={ProfileButtonsStyles.container}>
            <Button text='10 Task left' styles={{button: ProfileButtonsStyles.button}}/>
            <Button text='5 Task done' styles={{button: ProfileButtonsStyles.button}}/>
        </View>
    )
}

export default ProfileButtons