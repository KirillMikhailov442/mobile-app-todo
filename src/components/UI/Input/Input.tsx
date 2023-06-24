import React from "react";
import { Text, View, TextInput } from "react-native";
import { InputProps } from "../../../types";
// import { TextInput } from "react-native-gesture-handler";
import InputStyles from "./Input.style";
import { TextStyles } from "../../../styles";
import { textColors } from "../../../constants/colors";


const Input: React.FC<InputProps> = ({
    label,
    setValue,
    value,
    placeholder,
    options
})=>{

    return(
        <View style={[
            InputStyles.container,
            options && {...options.container}
        ]}>
            { label &&
                <Text style={[
                    TextStyles.text,
                    InputStyles.label,
                    options && {...options.label}
                ]}>{label}</Text>
            }
            <View style={[
                InputStyles.inputView,
                options && {...options.input}
            ]}>
                {options && options.icon}
                <TextInput 
                    placeholder={placeholder.text}
                    placeholderTextColor={placeholder.color ?? textColors.grayDark}
                    style={[
                        TextStyles.text,
                        InputStyles.input,
                        options && {...options.inputText},
                    ]}/>
            </View>
        </View>
    )
}

export default Input