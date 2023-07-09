import React from "react"
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

import { bgColors, textColors } from "../constants/colors";
import { 
    IntroScreen,
    WelcomeScreen,
    LoginScreen,
    RegisterScreen,
    CreateCategoryScreen,
    TaskScreen,
    SettingsScreen, } from "../screens";
import Tabs from "./Tabs";


const Stack = createStackNavigator()


const Navigation = () =>{

    return(
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="intro" 
                screenOptions={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    cardStyle: {
                        backgroundColor: bgColors.blackDefault
                    },
                    headerShadowVisible: false
                }}>



                {/* Tabs */}
                <Stack.Screen
                    options={{headerShown: false}}
                    name="home"
                    component={Tabs}/>
                    
                <Stack.Screen 
                    options={{headerShown: false}} 
                    name="intro" 
                    component={IntroScreen}
                    initialParams={{screenId: 1}}/>

                <Stack.Screen 
                    options={{
                        headerTitle: "",
                        headerStyle: {
                         backgroundColor: bgColors.blackDefault,
                        },
                    headerTintColor: textColors.whiteDefault
                    }} 
                    name="welcome" 
                    component={WelcomeScreen} />

                <Stack.Screen
                    options={{
                        headerStyle: {
                            backgroundColor: bgColors.blackDefault,
                        },
                        headerTitle: '',
                        headerTintColor: textColors.whiteDefault
                    }}
                    name="login"
                    component={LoginScreen}/>

                <Stack.Screen
                    options={{
                        headerStyle: {
                            backgroundColor: bgColors.blackDefault
                        },
                        headerTitle: '',
                        headerTintColor: textColors.whiteDefault
                    }}
                    name="register"
                    component={RegisterScreen}/>

                <Stack.Screen
                    options={{
                        headerStyle: {
                            backgroundColor: bgColors.blackDefault
                        },
                        headerTitle: '',
                        headerTintColor: textColors.whiteDefault,
                        headerShown: false
                    }}
                    name="categories"
                    component={CreateCategoryScreen}/>

                <Stack.Screen
                    options={{
                        headerStyle: {
                            backgroundColor: bgColors.blackDefault
                        },
                        headerTitle: '',
                        headerTintColor: textColors.whiteDefault,
                        headerShown: false
                    }}
                    name="task"
                    component={TaskScreen}/>

                <Stack.Screen
                    options={{
                        headerStyle: {
                            backgroundColor: bgColors.blackDefault
                        },
                        headerTitle: 'Settings',
                        headerTitleAlign: 'center',
                        headerTintColor: textColors.whiteDefault
                    }}
                    name="settings"
                    component={SettingsScreen}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation