import React from 'react'
import {View, Text} from 'react-native'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import IconOcticons from 'react-native-vector-icons/Octicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconSimpleLine from 'react-native-vector-icons/SimpleLineIcons'
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'


import ProfileListStyles from './ProfileList.style'
import { Preference } from '../../../components'
import { textColors } from '../../../constants/colors'
import PreferencesLayout from '../../../layouts/PreferencesLayout/PreferencesLayout'
import { useAppDispatch } from '../../../hooks'
import { showBottomSheet } from '../../../store/slices/bottomSheetSlice'
import { showModal } from '../../../store/slices/modalsSlice'

const ProfileList = () =>{

    const navigation = useNavigation()
    const dispatch = useDispatch()

    return(
        <View style={ProfileListStyles.container}>
            <PreferencesLayout title='Settings'>
            <Preference
                    text='App settings'
                    onPress={()=> navigation.navigate('settings')}
                    styles={{container: ProfileListStyles.preference}}
                    icon={<IconIonicons name='settings-outline' size={25} color={textColors.whiteDefault}/>}/>
            </PreferencesLayout>
            <PreferencesLayout title='Account'>
                <>
                <Preference
                    text='Change account name'
                    onPress={()=> dispatch(showModal('changeName'))}
                    styles={{container: ProfileListStyles.preference}}
                    icon={<Icon name='account-outline' size={25} color={textColors.whiteDefault}/>}/>

                <Preference
                    text='Change account password'
                    onPress={()=> dispatch(showModal('changePassword'))}
                    styles={{container: ProfileListStyles.preference}}
                    icon={<IconOcticons name='key' size={25} color={textColors.whiteDefault}/>}/>

                <Preference
                    text='Change account image'
                    onPress={()=> dispatch(showBottomSheet('changeImage'))}
                    styles={{container: ProfileListStyles.preference}}
                    icon={<Icon name='camera-outline' size={25} color={textColors.whiteDefault}/>}/>
                </>
            </PreferencesLayout>

            <PreferencesLayout title='Uptodo'>
                <>
                <Preference
                    text='About US'
                    styles={{container: ProfileListStyles.preference}}
                    icon={<Icon name='menu-open' size={25} color={textColors.whiteDefault}/>}/>

                <Preference
                    text='FAQ'
                    styles={{container: ProfileListStyles.preference}}
                    icon={<Icon name='alert-circle-outline' size={25} color={textColors.whiteDefault}/>}/>

                <Preference
                    text='Help & Feedback'
                    styles={{container: ProfileListStyles.preference}}
                    icon={<IconSimpleLine name='energy' size={25} color={textColors.whiteDefault}/>}/>

                <Preference
                    text='Support US'
                    styles={{container: ProfileListStyles.preference}}
                    icon={<IconAntDesign name='like2' size={25} color={textColors.whiteDefault}/>}/>

                <Preference
                    text='Log out'
                    onPress={()=> navigation.navigate('login')}
                    styles={{
                        container: ProfileListStyles.preference,
                        text: ProfileListStyles.preferenceExit
                    }}
                    showButton={false}
                    icon={<IconIonicons name='exit-outline' size={25} color={textColors.red}/>}/>
                </>
            </PreferencesLayout>

        </View>
    )
}

export default ProfileList