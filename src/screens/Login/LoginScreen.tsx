import React from "react"
import { Text, View } from "react-native"
import { ViewStyles } from "../../styles"
import { FormLayout } from "../../layouts"
import Input from "../../components/UI/Input/Input"
import Button from "../../components/UI/Button/Button"
import { buttonColors } from "../../constants/colors"



const LoginScreen = () =>{
    return(
        <View style={ViewStyles.container}>
            <FormLayout title="Login" socialMedias={['apple', 'google']}>
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
                        label="Username"
                        placeholder={{
                            text: "Enter your username"
                        }}
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