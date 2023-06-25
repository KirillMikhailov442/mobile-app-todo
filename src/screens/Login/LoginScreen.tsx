import React from "react"
import { View } from "react-native"
import { ViewStyles } from "../../styles"
import { FormLayout } from "../../layouts"
import Input from "../../components/UI/Input/Input"
import Button from "../../components/UI/Button/Button"
import { buttonColors } from "../../constants/colors"



const LoginScreen = () =>{
    return(
        <View style={ViewStyles.container}>
            <FormLayout 
                title="Login"
                bottomText={{
                    text: "Dont't have an account?",
                    link: {
                        text: "Register",
                        screen: 'register'
                    }
                }} 
                showSocialMedias={true}>
                <>
                    <Input 
                        label="Username"
                        placeholder={{
                            text: "Enter your username"
                        }}
                        options={{
                            container: {
                                marginTop: 52
                            }
                        }}/>
                    <Input 
                        label="Password"
                        placeholder={{
                            text: "Enter your password"
                        }}
                        security={true}
                        options={{
                            container: {
                                marginTop: 25
                            }
                        }}/>
                    <Button
                        text="Login"
                        options={{
                            button: {
                                backgroundColor: buttonColors.violetDefault,
                                marginTop: 70
                            }
                        }}/>
                </>
            </FormLayout>
        </View>
    )
}

export default LoginScreen