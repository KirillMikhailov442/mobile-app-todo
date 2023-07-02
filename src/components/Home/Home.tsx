import React from 'react'
import { SafeAreaView, View } from "react-native"

import HomeStyles from "./Home.style"
import HomeEmpty from './HomeEmpty/HomeEmpty'
import HomeHeader from './HomeHeader/HomeHeader'
import BottomSheet from '../BottomSheet/BottomSheet'
import { ModalCalendar, ModalPriority, ModalTime } from '../Modals'


const Home = () =>{

    return(
        <SafeAreaView style={[HomeStyles.container]}>
            <HomeHeader/>
            <HomeEmpty/>
            {/* <BottomSheet/> */}
            {/* <ModalCalendar/> */}
            <ModalTime/>
            {/* <ModalPriority/> */}
        </SafeAreaView>
    )
}

export default Home