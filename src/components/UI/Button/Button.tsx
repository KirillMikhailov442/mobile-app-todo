import React from "react"
import { Text, TouchableOpacity, View} from "react-native"
import ButtonStyles from "./Button.style"
import { ButtonProps } from "../../../types/index"


const Button: React.FC<ButtonProps> = ({
    text,
    onPress,
    isActive = true,
    styles,
    icon
}) =>{

    

    if(!isActive){
        return(
            <View
            style={[
                ButtonStyles.button,
                styles && { ...styles.button}
            ]}>
            {icon}
            {text && <Text style={[
                ButtonStyles.buttonText,
                styles && {...styles.text}
            ]}>{text}</Text>}
        </View>
        )
    }

    return(
        <TouchableOpacity
            onPress={onPress}
            style={[
                ButtonStyles.button,
                styles && {...styles.button}
            ]}>
            {icon}
            {text && <Text style={[
                ButtonStyles.buttonText,
                styles && {...styles.text}
            ]}>{text}</Text>}
        </TouchableOpacity>
    )
}

export default Button