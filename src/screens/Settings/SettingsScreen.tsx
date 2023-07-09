import React from "react";
import { ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconOcticons from 'react-native-vector-icons/Octicons'
import IconIonicons from 'react-native-vector-icons/Ionicons'

import { ViewStyles } from "../../styles";
import { PreferencesLayout } from "../../layouts";
import { Preference } from "../../components";
import { textColors } from "../../constants/colors";


const SettingsScreen = () =>{
    return(
        <ScrollView style={ViewStyles.container}>
            <PreferencesLayout title="Settings">
                <>
                    <Preference
                        text="Change app color"
                        icon={<IconOcticons name="paintbrush" size={25} color={textColors.whiteDefault}/>}/>

                    <Preference
                        text="Change app typography"
                        icon={<Icon name="format-text" size={25} color={textColors.whiteDefault}/>}/>

                    <Preference
                        text="Change app language"
                        icon={<IconIonicons name="language" size={25} color={textColors.whiteDefault}/>}/>
                </>
            </PreferencesLayout>

            <PreferencesLayout title="Import">
                <Preference
                    text="Import from Google calendar"
                    icon={<Icon name="import" size={25} color={textColors.whiteDefault}/>}/>
            </PreferencesLayout>
        </ScrollView>
    )
}

export default SettingsScreen