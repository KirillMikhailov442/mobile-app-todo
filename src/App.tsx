import React from 'react'
import {StatusBar, SafeAreaView} from 'react-native'

import {AppStyles} from './styles/index'
import { bgColors } from './constants/colors'
import Navigation from './navigations/Navigation'

const App = () =>{
    return (
        <SafeAreaView style={AppStyles.wrapper}>
            <StatusBar backgroundColor={bgColors.blackDefault}/>
            <Navigation/>
        </SafeAreaView>
    )
}

export default App