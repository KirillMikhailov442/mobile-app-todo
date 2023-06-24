import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';

import IntroScreen from "./Intro/IntroScreen"
import { bgColors, textColors } from "../constants/colors";
import WelcomeScreen from "./Welcome/WelcomeScreen";
import LoginScreen from "./Login/LoginScreen";


const Stack = createNativeStackNavigator()

const Navigation = () =>{

    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{contentStyle: {
                backgroundColor: bgColors.blackDefault
            }}}>
                <Stack.Screen 
                    options={{headerShown: false}} 
                    name="intro" 
                    component={IntroScreen}
                    initialParams={{screenId: 1}}/>

                <Stack.Screen 
                    options={{
                        headerTitle: "",
                        headerStyle: {
                         backgroundColor: bgColors.blackDefault
                        },
                    headerTintColor: textColors.whiteDefault
                    }} 
                    name="welcome" 
                    component={WelcomeScreen} />

                <Stack.Screen
                    options={{
                        headerStyle: {
                            backgroundColor: bgColors.blackDefault
                        },
                        headerTitle: '',
                        headerTintColor: textColors.whiteDefault
                    }}
                    name="login"
                    component={LoginScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation