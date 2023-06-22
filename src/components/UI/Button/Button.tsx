import React from "react"
import { Text, TouchableOpacity, View} from "react-native"
import ButtonStyles from "./Button.style"
import { textColors } from "../../../constants/colors"
import { ButtonProps } from "../../../types/index"


const Button = ({
    width,
    background,
    border,
    text,
    color,
    callback,
    isActivated = true,
    style
}: ButtonProps) =>{

    if(!isActivated){
        return(
            <View
            style={[
                ButtonStyles.button,
                {
                    width: width ? width : '100%',
                    backgroundColor: background ? background : 'rgba(0,0,0,0)',
                    borderRadius: 4,
                    borderWidth: border ? 1 : 0,
                    borderColor: border ? border : 'rgba(0,0,0,0)'
                },
                {...style}
            ]}>
            <Text style={[
                ButtonStyles.buttonText,
                {
                    color: color ? color : textColors.whiteDefault
                }
            ]}>{text}</Text>
        </View>
        )
    }

    return(
        <TouchableOpacity
            onPress={callback}
            style={[
                ButtonStyles.button,
                {
                    width: width ? width : '100%',
                    backgroundColor: background ? background : 'rgba(0,0,0,0)',
                    borderRadius: 4,
                    borderWidth: border ? 1 : 0,
                    borderColor: border ? border : 'rgba(0,0,0,0)'
                },
                {...style}
            ]}>
            <Text style={[
                ButtonStyles.buttonText,
                {
                    color: color ? color : textColors.whiteDefault
                }
            ]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button