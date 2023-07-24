import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { View, Text, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { CalendarScreen, FocusScreen, HomeScreen, ProfileScreen} from '../screens'
import { bgColors, textColors } from '../constants/colors'
import { ViewStyles } from '../styles'
import TabStyles from './Tab.style'
import { useAppDispatch } from '../hooks'
import { showBottomSheet } from '../store/slices/bottomSheetSlice'
import { isSmallScreenSize } from '../constants/size'


const iconSize = isSmallScreenSize ? 22 : 25

const Tab = createBottomTabNavigator()

const Tabs = () =>{

    const dispatch = useAppDispatch()
    
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
                            <Icon name={focused ? 'home' : 'home-outline'} color={textColors.whiteDefault} size={iconSize}/>
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
                            <Icon name={focused ? 'calendar-month' : 'calendar-month-outline'} color={textColors.whiteDefault} size={iconSize}/>
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
                        <TouchableHighlight
                            style={[
                                ViewStyles.center,
                                TabStyles.tabBarCenterButton
                            ]}
                            onPress={()=> dispatch(showBottomSheet('addTask'))}>
                            <Icon name='plus' color={textColors.whiteDefault} size={isSmallScreenSize ? 25 : 30}/>
                        </TouchableHighlight>
                    )
                }}/>


            <Tab.Screen
                name='focus'
                component={FocusScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <View style={[
                            ViewStyles.center
                        ]}>
                            <Icon name={focused ? 'clock-time-four' : 'clock-time-four-outline'} color={textColors.whiteDefault} size={iconSize}/>
                            <Text style={TabStyles.tabBarItemLabel}>Focus</Text>
                        </View>
                    )
                }}/>

            <Tab.Screen
                name='profile'
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <View style={[
                            ViewStyles.center
                        ]}>
                            <Icon name={focused ? 'account' : 'account-outline'} color={textColors.whiteDefault} size={iconSize}/>
                            <Text style={TabStyles.tabBarItemLabel}>Profile</Text>
                        </View>
                    )
                }}/>
        </Tab.Navigator>
    )
}

export default Tabs