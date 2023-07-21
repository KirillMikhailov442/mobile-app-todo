import React from "react";
import { Text, View, TextInput } from "react-native";
import { InputProps } from "../../../types";
import InputStyles from "./Input.style";
import { TextStyles } from "../../../styles";
import { textColors } from "../../../constants/colors";


const Input: React.FC<InputProps> = ({
    label,
    onChange,
    value,
    error,
    placeholder,
    styles,
    security,
    icon,
    isMultiline
})=>{

    return(
        <View style={[
            InputStyles.container,
            styles?.container
        ]}>
            { label &&
                <Text style={[
                    TextStyles.text,
                    InputStyles.label,
                    styles?.label
                ]}>{label}</Text>
            }
            <View style={[
                InputStyles.inputView,
                styles?.input
            ]}>
                {icon}
                <TextInput 
                    placeholder={placeholder.text}
                    placeholderTextColor={placeholder.color ?? textColors.grayVeryDark}
                    secureTextEntry={security}
                    onChangeText={onChange}
                    value={value}
                    multiline={isMultiline}
                    style={[
                        TextStyles.text,
                        InputStyles.input,
                        styles?.inputText
                    ]}/>
            </View>
            {error && <Text style={[
                InputStyles.error,
                styles?.error
            ]}>{error}</Text>}
        </View>
    )
}

export default Input