import { RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from './RootStackParamList'
 
export type ScreensRouteProp = RouteProp<RootStackParamList, keyof RootStackParamList>

export type ScreensNavigationProp = NativeStackNavigationProp<RootStackParamList,  keyof RootStackParamList>

export type NavigationProps = {
    route: ScreensRouteProp,
    navigation: ScreensNavigationProp
}
