import React from "react"
import { ScrollView } from "react-native"
import { useFormik } from "formik"
import * as Yup from 'yup';

import Button from "../UI/Button/Button"
import Input from "../UI/Input/Input"
import { FormLayout } from "../../layouts"
import { ViewStyles } from "../../styles"
import { buttonColors } from "../../constants/colors"
import { NavigationProps } from "../../types/navigation";


const RegisterForm: React.FC<Pick<NavigationProps, 'navigation'>> = ({navigation}) =>{

    const RegisterSchema = Yup.object({
        username: Yup.string()
            .min(5, "username less than 5 characters")
            .required("you didn't enter a name"),

        password: Yup.string()
            .min(5, "password less than 5 characters")
            .required("you didn't enter a password"),

            confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required("you did not repeat your password")
            
    })

    const formikRegister = useFormik({
        initialValues: {
            username: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: RegisterSchema,
        onSubmit: values => {
            navigation.navigate('home')
            
        }
    })

    return(
        <ScrollView style={ViewStyles.container}>
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
                styles={{
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
                            value={formikRegister.values.username}
                            onChange={formikRegister.handleChange('username')}
                            error={formikRegister.errors.username}
                            styles={{
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
                            value={formikRegister.values.password}
                            onChange={formikRegister.handleChange('password')}
                            error={formikRegister.errors.password}
                            styles={{
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
                            value={formikRegister.values.confirmPassword}
                            onChange={formikRegister.handleChange('confirmPassword')}
                            error={formikRegister.errors.confirmPassword}
                            styles={{
                                container: {
                                    marginTop: 25
                                }
                            }}/>

                        <Button
                            text="Register"
                            onPress={formikRegister.handleSubmit}
                            styles={{
                                button: {
                                    backgroundColor: buttonColors.violetDefault,
                                    marginTop: 40
                                }
                            }}/>
                    </>
            </FormLayout>
        </ScrollView>
    )
}

export default RegisterForm