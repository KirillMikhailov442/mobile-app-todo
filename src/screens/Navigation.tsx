import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';

import IntroScreen from "./Intro/IntroScreen"
import { bgColors } from "../constants/colors";


const Stack = createNativeStackNavigator()

const Navigation = () =>{

    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{contentStyle: {
                backgroundColor: bgColors.black
            }}}>
                <Stack.Screen options={{headerShown: false}} name="intro" component={IntroScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation