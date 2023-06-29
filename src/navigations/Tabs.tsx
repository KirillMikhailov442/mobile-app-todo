import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { HomeScreen} from '../screens'
import { textColors } from '../constants/colors'
import { ViewStyles } from '../styles'
import TabStyles from './Tab.style'

const Tab = createBottomTabNavigator()

const Tabs = () =>{
    return(
        <Tab.Navigator 
            screenOptions={{
                tabBarLabel: '',
                tabBarStyle: TabStyles.tabBarContainer
            }}>
            <Tab.Screen
                name='home'
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <View style={[
                            ViewStyles.center
                        ]}>
                            <Icon name='home' color={textColors.whiteDefault} size={25}/>
                            <Text style={TabStyles.tabBarItemLabel}>Home</Text>
                        </View>
                    )
                }}/>

            <Tab.Screen
                name='calendar'
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <View style={[
                            ViewStyles.center
                        ]}>
                            <Icon name='calendar-month' color={textColors.whiteDefault} size={25}/>
                            <Text style={TabStyles.tabBarItemLabel}>Calendar</Text>
                        </View>
                    )
                }}/>


            <Tab.Screen
                name='addTask'
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <View style={[
                            ViewStyles.center,
                            TabStyles.tabBarCenterButton
                        ]}>
                            <Icon name='plus' color={textColors.whiteDefault} size={30}/>
                        </View>
                    )
                }}/>


            <Tab.Screen
                name='focuse'
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <View style={[
                            ViewStyles.center
                        ]}>
                            <Icon name='clock-time-four-outline' color={textColors.whiteDefault} size={25}/>
                            <Text style={TabStyles.tabBarItemLabel}>Focuse</Text>
                        </View>
                    )
                }}/>

            <Tab.Screen
                name='profile'
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <View style={[
                            ViewStyles.center
                        ]}>
                            <Icon name='account' color={textColors.whiteDefault} size={25}/>
                            <Text style={TabStyles.tabBarItemLabel}>Profile</Text>
                        </View>
                    )
                }}/>
        </Tab.Navigator>
    )
}

export default Tabs