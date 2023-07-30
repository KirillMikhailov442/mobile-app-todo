import React from 'react'
import { Text, View } from 'react-native'

import { TextStyles, ViewStyles } from '../../../styles'
import WelcomeContentStyles from './WelcomeContent.style'
import Button from '../../../components/UI/Button/Button'
import { buttonColors } from '../../../constants/colors'
import { NavigationProps } from '../../../types/navigation';
import { isSmallScreenSize } from '../../../constants/size'

const WelcomeContent: React.FC<Pick<NavigationProps, 'navigation'>> = ({navigation}) =>{
    return(
        <View style={[
            ViewStyles.container,
            ViewStyles.fullScreen]}>
            <Text style={[
                TextStyles.text, 
                TextStyles.textCenter,
                TextStyles.title,
                WelcomeContentStyles.title
                ]}>Welcome to UpTodo</Text>

                <Text style={[
                    TextStyles.text,
                    TextStyles.textCenter,
                    WelcomeContentStyles.subTitle
                ]}>Please login to your account or create new account to continue</Text>
                
                <View style={WelcomeContentStyles.footer}>
                    <Button 
                        text='LOGIN'
                        styles={{
                            button: {
                                backgroundColor: buttonColors.violetDefault
                            },
                            text: {
                                fontSize: isSmallScreenSize ? 14 : 16
                            }
                        }}
                        onPress={()=> navigation.navigate('login')}/>
                    <Button 
                        text='CREATE ACCOUNT'
                        styles={{
                            button: {
                                borderColor: buttonColors.violetDefault,
                                marginTop: 28
                            },
                            text: {
                                fontSize: isSmallScreenSize ? 14 : 16
                            }
                        }}
                        onPress={()=> navigation.navigate('register')}/>
                </View>
        </View>
    )
}

export default WelcomeContent