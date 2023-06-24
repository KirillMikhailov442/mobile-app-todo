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
            <FormLayout title="Login">
                <Button
                    text="Login"
                    options={{
                        button: {
                            backgroundColor: buttonColors.violetDefault
                        }
                    }}/>
            </FormLayout>
        </View>
    )
}

export default LoginScreen