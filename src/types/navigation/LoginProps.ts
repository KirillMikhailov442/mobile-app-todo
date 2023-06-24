import { RouteProp } from "@react-navigation/native"

import { RootStackParamList } from "./StackParamList"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
 
export type LoginScreenRouteProp = RouteProp<RootStackParamList, 'login'>

export type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'login'>

export type LoginProps = {
    route: LoginScreenRouteProp,
    navigation: LoginScreenNavigationProp
}
