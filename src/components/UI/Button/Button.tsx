import React from "react"
import { Text, TouchableOpacity, View} from "react-native"
import ButtonStyles from "./Button.style"
import { ButtonProps } from "../../../types/index"


const Button = ({
    text,
    callback,
    isActive = true,
    options,
    icon
}: ButtonProps) =>{

    

    if(!isActive){
        return(
            <View
            style={[
                ButtonStyles.button,
                options && { ...options.button}
            ]}>
            {icon && icon}
            <Text style={[
                ButtonStyles.buttonText,
                icon && {marginLeft: 10},
                options && {...options.text}
            ]}>{text}</Text>
        </View>
        )
    }

    return(
        <TouchableOpacity
            onPress={callback}
            style={[
                ButtonStyles.button,
                options && {...options.button}
            ]}>
            <Text style={[
                ButtonStyles.buttonText,
                options && {...options.text}
            ]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button