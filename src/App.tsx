import React from 'react'
import {Provider} from 'react-redux'
import store from './store/store'
import { bgColors } from './constants/colors'

import {View, StatusBar} from 'react-native'

const App = () =>{
    return (
        <Provider store={store}>
            <StatusBar backgroundColor={bgColors.black1}/>
            <View>

            </View>
        </Provider>
    )
}

export default App