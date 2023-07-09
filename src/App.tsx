import React, { useEffect, useState } from 'react'
import {StatusBar, SafeAreaView} from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { Provider } from 'react-redux'

import {AppStyles} from './styles/index'
import { bgColors } from './constants/colors'
import Navigation from './navigations/Navigation'
import store from './store/store'

const App = () =>{

    const [showSplash, setShowSplash] = useState(true)


    useEffect(()=>{
        if(showSplash){
            SplashScreen.show()

        }
        else{
            SplashScreen.hide()
        }

        
    }, [showSplash])

    setTimeout(()=> setShowSplash(false), 1000)

    return (
            <Provider store={store}>
                <SafeAreaView style={AppStyles.wrapper}>
                    <StatusBar backgroundColor={bgColors.blackDefault}/>
                    <Navigation/>
                </SafeAreaView>
            </Provider>
    )
}

export default App