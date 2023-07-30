import React from 'react';
import { ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconOcticons from 'react-native-vector-icons/Octicons'
import IconIonicons from 'react-native-vector-icons/Ionicons'

import { ViewStyles } from '../../styles';
import { PreferencesLayout } from '../../layouts';
import { Preference } from '../../components';
import { textColors } from '../../constants/colors';
import { isSmallScreenSize } from '../../constants/size';

const iconSize = isSmallScreenSize ? 20 : 25

const SettingsScreen = () =>{
    return(
        <ScrollView style={ViewStyles.container}>
            <PreferencesLayout title='Settings'>
                <>
                    <Preference
                        text='Change app color'
                        icon={<IconOcticons name='paintbrush' size={iconSize} color={textColors.whiteDefault}/>}/>

                    <Preference
                        text='Change app typography'
                        icon={<Icon name='format-text' size={iconSize} color={textColors.whiteDefault}/>}/>

                    <Preference
                        text='Change app language'
                        icon={<IconIonicons name='language' size={iconSize} color={textColors.whiteDefault}/>}/>
                </>
            </PreferencesLayout>

            <PreferencesLayout title='Import'>
                <Preference
                    text='Import from Google calendar'
                    icon={<Icon name='import' size={iconSize} color={textColors.whiteDefault}/>}/>
            </PreferencesLayout>
        </ScrollView>
    )
}

export default SettingsScreen