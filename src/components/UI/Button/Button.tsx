import React from "react"
import { Text, TouchableOpacity, View} from "react-native"
import ButtonStyles from "./Button.style"
import { ButtonProps } from "../../../types"


const Button: React.FC<ButtonProps> = ({
    text,
    onPress,
    isActive = true,
    styles,
    icon,
    positinIcon = 'left'
}) =>{

    

    if(!isActive){
        return(
            <View
            style={[
                ButtonStyles.button,
                styles?.button
            ]}>
            {positinIcon === 'left' && icon}
            {text && <Text style={[
                ButtonStyles.buttonText,
                styles?.text
            ]}>{text}</Text>}
            {positinIcon === 'right' && icon}
        </View>
        )
    }

    return(
        <TouchableOpacity
            onPress={onPress}
            style={[
                ButtonStyles.button,
                styles?.button
            ]}>
            {positinIcon === 'left' && icon}
            {text && <Text style={[
                ButtonStyles.buttonText,
                styles?.text
            ]}>{text}</Text>}
            {positinIcon === 'right' && icon}
        </TouchableOpacity>
    )
}

export default Button