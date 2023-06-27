import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { HomeScreen} from '../screens'
import { bgColors } from '../constants/colors'

const Tab = createBottomTabNavigator()

const Tabs = () =>{
    return(
        <Tab.Navigator 
            screenOptions={{
                tabBarLabel: '',
                tabBarStyle: {
                    backgroundColor: bgColors.blackLight,
                    height: 100,
                    paddingBottom: 30,
                    
                }
            }}>
            <Tab.Screen
                name='home'
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused, color, size}) => (
                        <View>
                            <Icon name='home' color={'red'} size={size}/>
                        </View>
                    )
                }}/>
        </Tab.Navigator>
    )
}

export default Tabs