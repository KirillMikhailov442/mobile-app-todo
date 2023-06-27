import React from "react"
import { Text, View } from "react-native"

import { TextStyles, ViewStyles } from "../../styles"
import WelcomeStyles from "./Welcome.style"
import Button from "../UI/Button/Button"
import { buttonColors } from "../../constants/colors"
import { NavigationProps } from "../../types/navigation";

const Welcome: React.FC<Pick<NavigationProps, 'navigation'>> = ({navigation}) =>{
    return(
        <View style={ViewStyles.container}>
            <Text style={[
                TextStyles.text, 
                TextStyles.textCenter,
                TextStyles.title,
                WelcomeStyles.title
                ]}>Welcome to UpTodo</Text>

                <Text style={[
                    TextStyles.text,
                    TextStyles.textCenter,
                    WelcomeStyles.subTitle
                ]}>Please login to your account or create new account to continue</Text>
                
                <View style={WelcomeStyles.footer}>
                    <Button 
                        text="LOGIN"
                        styles={{
                            button: {
                                backgroundColor: buttonColors.violetDefault
                            }
                        }}
                        onPress={()=> navigation.navigate('login')}/>
                    <Button 
                        text="CREATE ACCOUNT"
                        styles={{
                            button: {
                                borderColor: buttonColors.violetDefault,
                                marginTop: 28
                            }
                        }}
                        onPress={()=> navigation.navigate('register')}/>
                </View>
        </View>
    )
}

export default Welcome