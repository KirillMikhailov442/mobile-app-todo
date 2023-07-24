import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import IconSimple from 'react-native-vector-icons/SimpleLineIcons'

import { PreferenceProps } from '../../types'
import PreferenceStyles from './Preference.style'
import { textColors } from '../../constants/colors'
import { isSmallScreenSize } from '../../constants/size'

const Preference: React.FC<PreferenceProps> = ({
    icon,
    text,
    button,
    showButton=true,
    onPress,
    styles
}) =>{
    return(
        <TouchableOpacity 
            onPress={onPress}
            style={[
                PreferenceStyles.container,
                {...styles?.container}
            ]}>
            {icon}
            <Text style={[
                PreferenceStyles.text,
                {...styles?.text}
            ]}>{text}</Text>
            { button ?? 
                ( showButton && <IconSimple 
                    name='arrow-right' 
                    color={textColors.whiteDefault} 
                    size={isSmallScreenSize ? 15 : 20}
                    style={PreferenceStyles.button}/>)
            }
        </TouchableOpacity>
    )
}

export default Preference