import React from 'react'
import { Text, View } from 'react-native'

import PreferencesLayoutStyles from './PreferencesLayout.style'
import { PreferencesLayoutProps } from '../../types'



const PreferencesLayout: React.FC<PreferencesLayoutProps> = ({
    children,
    title
}) =>{
    return(
        <View style={PreferencesLayoutStyles.section}>
            <Text style={PreferencesLayoutStyles.sectionTitle}>
                {title}
            </Text>
            {children}
        </View>
    )
}

export default PreferencesLayout