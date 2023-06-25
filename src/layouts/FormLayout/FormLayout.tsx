import React from "react"
import { Text, View, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"


import { FormLayoutProps } from "../../types/FormLayoutProps"
import { TextStyles } from "../../styles"
import FormLayoutStyles from "./FormLayout.style"
import { LayoutProps } from "../../types"
import Button from "../../components/UI/Button/Button"
import { buttonColors } from "../../constants/colors"
import {ScreensNavigationProp } from "../../types/navigation/NavigationProps"



const FormLayout: React.FC<FormLayoutProps & LayoutProps> = ({
    title,
    options,
    children,
    showSocialMedias,
    bottomText,
}) =>{

    const navigation: ScreensNavigationProp = useNavigation()


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
            {showSocialMedias && 
                <View style={[
                    FormLayoutStyles.footer,
                    options && {...options.socialMedias}
                ]}>
                    <View style={[
                        FormLayoutStyles.divider,
                        options && {...options.divider}
                    ]}>
                        <View style={FormLayoutStyles.dividerLine}></View>
                        <Text style={[
                            TextStyles.text,
                            TextStyles.textCenter,
                            FormLayoutStyles.dividerText
                        ]}>or</Text>
                    </View>
                    
                    <Button
                        text="Login with Google"
                        icon={<Image  source={require('../../assets/images/login/google.png')} />}
                        options={{
                            button: {
                                borderColor: buttonColors.violetDefault
                            },
                            text: {
                                marginLeft: 10
                            }
                        }}/>

                    <Button
                        text="Login with Apple"
                        icon={<Image  source={require('../../assets/images/login/apple.png')} />}
                        options={{
                            button: {
                                borderColor: buttonColors.violetDefault,
                                marginTop: 20
                            },
                            text: {
                                marginLeft: 10
                            }
                        }}/>

                    <Text  style={[
                        TextStyles.text,
                        TextStyles.textCenter,
                        FormLayoutStyles.bottomText
                    ]}>{bottomText.text}
                        <Text 
                            style={[
                                FormLayoutStyles.bottomTextLink
                            ]}
                            onPress={()=> navigation.navigate(bottomText.link.screen)}>
                            {bottomText.link.text}
                        </Text>
                    </Text>

                </View>}
        </View>
    )
}

export default FormLayout