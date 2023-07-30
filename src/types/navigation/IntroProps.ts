import { ScreensNavigationProp } from './NavigationProps';

import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from './RootStackParamList'

export type IntroRouteProps = RouteProp<RootStackParamList, 'intro'>

export interface IntroProps {
    route: IntroRouteProps,
    navigation: ScreensNavigationProp
}