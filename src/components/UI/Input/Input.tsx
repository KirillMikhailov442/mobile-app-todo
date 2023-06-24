import React from "react";
import { Text, View } from "react-native";
import { InputProps } from "../../../types";
import { TextInput } from "react-native-gesture-handler";
import InputStyles from "./Input.style";
import { TextStyles } from "../../../styles";


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
                    placeholder={placeholder}
                    value={value}
                    style={[
                        InputStyles.input,
                        options && {...options.inputText},
                    ]}/>
            </View>
        </View>
    )
}

export default Input