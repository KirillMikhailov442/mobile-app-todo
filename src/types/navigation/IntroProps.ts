import { RouteProp } from "@react-navigation/native"

import { RootStackParamList } from "./StackParamList"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
 
export type IntroScreenRouteProp = RouteProp<RootStackParamList, 'intro'>

export type IntroScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'intro'>

export type IntroProps = {
    route: IntroScreenRouteProp,
    navigation: IntroScreenNavigationProp
}

