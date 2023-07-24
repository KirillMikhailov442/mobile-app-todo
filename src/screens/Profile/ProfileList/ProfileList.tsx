import React from 'react'
import {View, Text} from 'react-native'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import IconOcticons from 'react-native-vector-icons/Octicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconSimpleLine from 'react-native-vector-icons/SimpleLineIcons'
import IconAntDesign from 'react-native-vector-icons/AntDesign'

import ProfileListStyles from './ProfileList.style'
import { Preference } from '../../../components'
import { textColors } from '../../../constants/colors'
import PreferencesLayout from '../../../layouts/PreferencesLayout/PreferencesLayout'
import { useAppDispatch, useAppNavigation } from '../../../hooks'
import { showBottomSheet } from '../../../store/slices/bottomSheetSlice'
import { showModal } from '../../../store/slices/modalsSlice'
import { isSmallScreenSize } from '../../../constants/size'


const iconSize = isSmallScreenSize ? 20 : 25

const ProfileList = () =>{

    const navigation = useAppNavigation()
    const dispatch = useAppDispatch()

    return(
        <View style={ProfileListStyles.container}>
            <PreferencesLayout title='Settings'>
            <Preference
                    text='App settings'
                    onPress={()=> navigation.navigate('settings')}
                    styles={{container: ProfileListStyles.preference}}
                    icon={<IconIonicons name='settings-outline' size={iconSize} color={textColors.whiteDefault}/>}/>
            </PreferencesLayout>
            <PreferencesLayout title='Account'>
                <>
                <Preference
                    text='Change account name'
                    onPress={()=> dispatch(showModal('changeName'))}
                    styles={{container: ProfileListStyles.preference}}
                    icon={<Icon name='account-outline' size={iconSize} color={textColors.whiteDefault}/>}/>

                <Preference
                    text='Change account password'
                    onPress={()=> dispatch(showModal('changePassword'))}
                    styles={{container: ProfileListStyles.preference}}
                    icon={<IconOcticons name='key' size={iconSize} color={textColors.whiteDefault}/>}/>

                <Preference
                    text='Change account image'
                    onPress={()=> dispatch(showBottomSheet('changeImage'))}
                    styles={{container: ProfileListStyles.preference}}
                    icon={<Icon name='camera-outline' size={iconSize} color={textColors.whiteDefault}/>}/>
                </>
            </PreferencesLayout>

            <PreferencesLayout title='Uptodo'>
                <>
                <Preference
                    text='About US'
                    styles={{container: ProfileListStyles.preference}}
                    icon={<Icon name='menu-open' size={iconSize} color={textColors.whiteDefault}/>}/>

                <Preference
                    text='FAQ'
                    styles={{container: ProfileListStyles.preference}}
                    icon={<Icon name='alert-circle-outline' size={iconSize} color={textColors.whiteDefault}/>}/>

                <Preference
                    text='Help & Feedback'
                    styles={{container: ProfileListStyles.preference}}
                    icon={<IconSimpleLine name='energy' size={iconSize} color={textColors.whiteDefault}/>}/>

                <Preference
                    text='Support US'
                    styles={{container: ProfileListStyles.preference}}
                    icon={<IconAntDesign name='like2' size={iconSize} color={textColors.whiteDefault}/>}/>

                <Preference
                    text='Log out'
                    onPress={()=> navigation.navigate('login')}
                    styles={{
                        container: ProfileListStyles.preference,
                        text: ProfileListStyles.preferenceExit
                    }}
                    showButton={false}
                    icon={<IconIonicons name='exit-outline' size={iconSize} color={textColors.red}/>}/>
                </>
            </PreferencesLayout>

        </View>
    )
}

export default ProfileList