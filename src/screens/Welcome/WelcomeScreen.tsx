import React from "react"
import { Text, View } from "react-native"
import Icon from 'react-native-vector-icons/AntDesign';

import { TextStyles, ViewStyles } from "../../styles"
import WelcomeScreenStyles from "./WelcomeScreen.style"
import Button from "../../components/UI/Button/Button"
import { buttonColors } from "../../constants/colors"
import { LoginProps } from "../../types/navigation"

const WelcomeScreen: React.FC<LoginProps> = ({navigation}) =>{
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
                        options={{
                            button: {
                                backgroundColor: buttonColors.violetDefault
                            }
                        }}
                        callback={()=> navigation.navigate('login')}/>
                    <Button 
                        text="CREATE ACCOUNT"
                        options={{
                            button: {
                                borderColor: buttonColors.violetDefault,
                                marginTop: 28
                            }
                        }}/>
                </View>
        </View>
    )
}

export default WelcomeScreen