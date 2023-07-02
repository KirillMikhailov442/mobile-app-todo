import React from "react"
import { Text, View, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"


import { FormLayoutProps } from "../../types/layouts/FormLayoutProps"
import { TextStyles } from "../../styles"
import FormLayoutStyles from "./FormLayout.style"
import { LayoutProps } from "../../types"
import Button from "../../components/UI/Button/Button"
import { buttonColors } from "../../constants/colors"
import {ScreensNavigationProp } from "../../types/navigation/NavigationProps"


const FormLayout: React.FC<FormLayoutProps & LayoutProps> = ({
    title,
    styles,
    children,
    showSocialMedias,
    bottomText,
}) =>{

    const navigation: ScreensNavigationProp = useNavigation()


    return(
        <View style={[
            FormLayoutStyles.container,
            styles && {...styles.container}
            
        ]}>
            {title && <Text style={[
                TextStyles.text,
                TextStyles.title,
                FormLayoutStyles.title,
                styles && {...styles.title}
            ]}>{title}</Text>}
            {children}
            {showSocialMedias && 
                <View style={[
                    FormLayoutStyles.footer,
                    styles && {...styles.socialMedias}
                ]}>
                    <View style={[
                        FormLayoutStyles.divider,
                        styles && {...styles.divider}
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
                        onPress={()=> navigation.navigate('home')}
                        styles={{
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
                        onPress={()=> navigation.navigate('home')}
                        styles={{
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
                    ]}>{bottomText && bottomText.text}
                        <Text 
                            style={[
                                FormLayoutStyles.bottomTextLink
                            ]}
                            onPress={()=> navigation.navigate(bottomText.link.screen)}>
                            {bottomText && bottomText.link.text}
                        </Text>
                    </Text>

                </View>}
        </View>
    )
}

export default FormLayout