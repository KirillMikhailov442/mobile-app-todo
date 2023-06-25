import React from "react"
import {View} from 'react-native'
import { ViewStyles } from "../../styles"
import { FormLayout } from "../../layouts"
import Button from "../../components/UI/Button/Button"
import Input from "../../components/UI/Input/Input"
import { buttonColors } from "../../constants/colors"

const RegisterScreen = () =>{
    return(
        <View style={ViewStyles.container}>
            <FormLayout 
                title="Register" 
                showSocialMedias={true}
                bottomText={{
                    text: 'Already have an account?',
                    link: {
                        text: 'Login',
                        screen: 'login'
                    }
                }}
                options={{
                    title: {
                        marginTop: 3
                    }
                }}>
                    <>
                        <Input
                            placeholder={{
                                text: 'Enter your Username',
                            }}
                            label="Username"
                            options={{
                                container: {
                                    marginTop: 25
                                }
                            }}/>

                        <Input
                            placeholder={{
                                text: 'Enter password'
                            }}
                            security={true}
                            label="Password"
                            options={{
                                container: {
                                    marginTop: 25
                                }
                            }}/>

                        <Input
                            placeholder={{
                                text: 'Enter password'
                            }}
                            security={true}
                            label="Confirm Password"
                            options={{
                                container: {
                                    marginTop: 25
                                }
                            }}/>

                        <Button
                            text="Register"
                            options={{
                                button: {
                                    backgroundColor: buttonColors.violetDefault,
                                    marginTop: 40
                                }
                            }}/>
                    </>
            </FormLayout>
        </View>
    )
}

export default RegisterScreen