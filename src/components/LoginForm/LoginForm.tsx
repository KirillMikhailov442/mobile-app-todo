import React from "react"
import { ScrollView } from "react-native"
import { useFormik } from "formik"
import * as Yup from 'yup';


import { ViewStyles } from "../../styles"
import { FormLayout } from "../../layouts"
import Button from '../UI/Button/Button'
import Input from "../UI/Input/Input"
import { buttonColors } from "../../constants/colors"
import { NavigationProps } from "../../types/navigation/NavigationProps";


const LoginForm: React.FC<Pick<NavigationProps, 'navigation'>> = ({navigation}) =>{

    const LoginSchema = Yup.object({
        username: Yup.string()
            .min(5, "username less than 5 characters")
            .required("you didn't enter a name"),

        password: Yup.string()
            .min(5, "password less than 5 characters")
            .required("you didn't enter a password")
    })

    const formikLogin = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: LoginSchema,
        onSubmit: values => {
            navigation.navigate('home')
        }
    })

    return(
        <ScrollView style={ViewStyles.container}>
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
                        onChange={formikLogin.handleChange('username')}
                        value={formikLogin.values.username}
                        error={formikLogin.errors.username}
                        styles={{
                            container: {
                                marginTop: 52
                            }
                        }}/>

                    <Input 
                        label="Password"
                        placeholder={{
                            text: "Enter your password"
                        }}
                        onChange={formikLogin.handleChange('password')}
                        value={formikLogin.values.password}
                        error={formikLogin.errors.password}
                        security={true}
                        styles={{
                            container: {
                                marginTop: 25
                            }
                        }}/>

                    <Button
                        text="Login"
                        onPress={formikLogin.handleSubmit}
                        styles={{
                            button: {
                                backgroundColor: buttonColors.violetDefault,
                                marginTop: 70
                            }
                        }}/>
                </>
            </FormLayout>
        </ScrollView>
    )
}

export default LoginForm