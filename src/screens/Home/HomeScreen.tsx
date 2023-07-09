import React from "react"
import { SafeAreaView } from "react-native"


import HomeContent from "./HomeContent/HomeContent"
import HomeHeader from "./HomeHeader/HomeHeader"
import HomeEmpty from "./HomeEmpty/HomeEmpty"
import { ModalCalendar, ModalPriority, ModalTime, ModalCategory } from "../../components/Modals"
import { BottomSheetAddTask } from "../../components/BottomSheet"
import { NavigationProps } from "../../types/navigation"
import HomeScreenStyles from "./HomeScreen.style"

const HomeScreen:React.FC<Pick<NavigationProps, 'navigation'>> = ({navigation}) =>{

    return(
        <SafeAreaView style={[HomeScreenStyles.container]}>
            <HomeHeader/>
            <HomeContent/>
            {/* <HomeEmpty/> */}
            {/* <BottomSheetAddTask/> */}
            {/* <ModalCalendar/> */}
            {/* <ModalTime/> */}
            {/* <ModalPriority/> */}
            {/* <ModalCategory navigation={navigation}/> */}
        </SafeAreaView>
    )
}

export default HomeScreen