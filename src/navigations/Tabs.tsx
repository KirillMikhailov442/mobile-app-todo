import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { View, Text, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { CalendarScreen, CreateCategoryScreen, HomeScreen} from '../screens'
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
                    tabBarIcon: ({focused}) => (
                        <View style={[
                            ViewStyles.center
                        ]}>
                            <Icon name={focused ? 'home' : 'home-outline'} color={textColors.whiteDefault} size={25}/>
                            <Text style={TabStyles.tabBarItemLabel}>Home</Text>
                        </View>
                    )
                }}/>


            <Tab.Screen
                name='calendar'
                component={CalendarScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <View style={[
                            ViewStyles.center
                        ]}>
                            <Icon name={focused ? 'calendar-month' : 'calendar-month-outline'} color={textColors.whiteDefault} size={25}/>
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
                        <Pressable style={[
                            ViewStyles.center,
                            TabStyles.tabBarCenterButton
                        ]}>
                            <Icon name='plus' color={textColors.whiteDefault} size={30}/>
                        </Pressable>
                    )
                }}/>


            <Tab.Screen
                name='focuse'
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <View style={[
                            ViewStyles.center
                        ]}>
                            <Icon name={focused ? 'clock-time-four' : 'clock-time-four-outline'} color={textColors.whiteDefault} size={25}/>
                            <Text style={TabStyles.tabBarItemLabel}>Focuse</Text>
                        </View>
                    )
                }}/>

            <Tab.Screen
                name='profile'
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <View style={[
                            ViewStyles.center
                        ]}>
                            <Icon name={focused ? 'account' : 'account-outline'} color={textColors.whiteDefault} size={25}/>
                            <Text style={TabStyles.tabBarItemLabel}>Profile</Text>
                        </View>
                    )
                }}/>
        </Tab.Navigator>
    )
}

export default Tabs