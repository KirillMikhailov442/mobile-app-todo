import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';

import IntroScreen from "./Intro/IntroScreen"
import { bgColors, textColors } from "../constants/colors";
import WelcomeScreen from "./Welcome/WelcomeScreen";


const Stack = createNativeStackNavigator()

const Navigation = () =>{

    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{contentStyle: {
                backgroundColor: bgColors.black
            }}}>
                <Stack.Screen 
                    options={{headerShown: false}} 
                    name="intro" 
                    component={IntroScreen}
                    initialParams={{screenId: 1}}/>

                <Stack.Screen options={{
                    headerShown: true,
                    headerTitle: "",
                    headerStyle: {
                        backgroundColor: bgColors.black
                    },
                    headerTintColor: textColors.whiteDefault
                }} name="welcome" component={WelcomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation