import React from 'react'
import {View, SafeAreaView} from 'react-native'
import HomeStyles from './Home.style'
import { HeaderLayout } from '../../layouts'
import HomeEmpty from './HomeEmpty/HomeEmpty'
import HomeHeader from './HomeHeader/HomeHeader'


const Home = () =>{
    return(
        <SafeAreaView style={HomeStyles.homeContainer}>
            <HomeHeader/>
            <HomeEmpty/>
        </SafeAreaView>
    )
}

export default Home