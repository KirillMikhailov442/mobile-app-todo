import 'react-native-gesture-handler';

import React from 'react'
import {StatusBar, SafeAreaView} from 'react-native'

import {AppStyles} from './styles/index'
import { bgColors } from './constants/colors'
import Navigation from './screens/Navigation'

const App = () =>{
    return (
        <SafeAreaView style={AppStyles.wrapper}>
            <StatusBar backgroundColor={bgColors.black}/>
            <Navigation/>
        </SafeAreaView>
    )
}

export default App