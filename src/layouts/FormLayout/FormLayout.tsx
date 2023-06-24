import React from "react"
import { FormLayoutProps } from "../../types/FormLayoutProps"
import { Text, View } from "react-native"
import { TextStyles, ViewStyles } from "../../styles"
import FormLayoutStyles from "./FormLayout.style"
import { LayoutProps } from "../../types"



const FormLayout: React.FC<FormLayoutProps & LayoutProps> = ({
    title,
    options,
    children
}) =>{
    return(
        <View style={[
            FormLayoutStyles.container
        ]}>
            {title && <Text style={[
                TextStyles.text,
                TextStyles.title,
                FormLayoutStyles.title
            ]}>{title}</Text>}
            {children}
        </View>
    )
}

export default FormLayout