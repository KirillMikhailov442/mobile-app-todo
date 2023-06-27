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
    icon
})=>{

    return(
        <View style={[
            InputStyles.container,
            styles && {...styles.container}
        ]}>
            { label &&
                <Text style={[
                    TextStyles.text,
                    InputStyles.label,
                    styles && {...styles.label}
                ]}>{label}</Text>
            }
            <View style={[
                InputStyles.inputView,
                styles && {...styles.input}
            ]}>
                {icon && icon}
                <TextInput 
                    placeholder={placeholder.text}
                    placeholderTextColor={placeholder.color ?? textColors.grayVeryDark}
                    secureTextEntry={security}
                    onChangeText={onChange}
                    value={value}
                    style={[
                        TextStyles.text,
                        InputStyles.input,
                        styles && {...styles.inputText},
                    ]}/>
            </View>
            {error && <Text style={[
                InputStyles.error,
                styles && {...styles.error}
            ]}>{error}</Text>}
        </View>
    )
}

export default Input