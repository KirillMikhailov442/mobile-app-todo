import React from "react"
import { Text, View } from "react-native"
import { TextStyles, ViewStyles } from "../../styles"
import WelcomeScreenStyles from "./WelcomeScreen.style"
import Button from "../../components/UI/Button/Button"
import { buttonColors } from "../../constants/colors"

const WelcomeScreen = () =>{
    return(
        <View style={ViewStyles.container}>
            <Text style={[
                TextStyles.text, 
                TextStyles.textCenter,
                TextStyles.title,
                WelcomeScreenStyles.title
                ]}>Welcome to UpTodo</Text>

                <Text style={[
                    TextStyles.text,
                    TextStyles.textCenter,
                    WelcomeScreenStyles.subTitle
                ]}>Please login to your account or create new account to continue</Text>
                
                <View style={WelcomeScreenStyles.footer}>
                    <Button 
                        text="LOGIN"
                        background={buttonColors.violetDefault}/>
                    <Button 
                        text="CREATE ACCOUNT"
                        border={buttonColors.violetDefault}
                        style={{marginTop: 28}}/>
                </View>
        </View>
    )
}

export default WelcomeScreen