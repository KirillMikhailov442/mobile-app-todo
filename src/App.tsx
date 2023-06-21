import React from 'react'
import {View, StatusBar} from 'react-native'

import {AppStyles} from './styles/index'
import { bgColors } from './constants/colors'
import Navigation from './screens/Navigation'

const App = () =>{
    return (
        <View style={AppStyles.wrapper}>
            <StatusBar backgroundColor={bgColors.black}/>
            <Navigation/>
        </View>
    )
}

export default App