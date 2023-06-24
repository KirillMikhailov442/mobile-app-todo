import React from "react"
import { FormLayoutProps } from "../../types/FormLayoutProps"
import { Text, View } from "react-native"
import { TextStyles, ViewStyles } from "../../styles"
import FormLayoutStyles from "./FormLayout.style"
import { LayoutProps } from "../../types"



const FormLayout: React.FC<FormLayoutProps & LayoutProps> = ({
    title,
    options,
    children,
    socialMedias
}) =>{
    return(
        <View style={[
            FormLayoutStyles.container,
            options && {...options.container}
            
        ]}>
            {title && <Text style={[
                TextStyles.text,
                TextStyles.title,
                FormLayoutStyles.title,
                options && {...options.title}
            ]}>{title}</Text>}
            {children}
            {socialMedias && 
                <View style={[
                    FormLayoutStyles.footer,
                    options && {...options.socialMedias}
                ]}>
                    

                </View>}
        </View>
    )
}

export default FormLayout