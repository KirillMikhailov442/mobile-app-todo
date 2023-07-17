import React, {useEffect} from "react"
import { SafeAreaView } from "react-native"


import HomeContent from "./HomeContent/HomeContent"
import HomeHeader from "./HomeHeader/HomeHeader"
import HomeEmpty from "./HomeEmpty/HomeEmpty"
import { ModalCalendar, ModalPriority, ModalTime, ModalCategory } from "../../components/Modals"
import { BottomSheetAddTask } from "../../components/BottomSheet"
import { NavigationProps } from "../../types/navigation"
import HomeScreenStyles from "./HomeScreen.style"
import AddTask from "../../components/AddTask/AddTask"

const HomeScreen:React.FC<Pick<NavigationProps, 'navigation'>> = ({navigation}) =>{

    return(
        <SafeAreaView style={[HomeScreenStyles.container]}>
            <HomeHeader/>
            <HomeContent/>
            {/* <HomeEmpty/> */}
           <AddTask/>
        </SafeAreaView>
    )
}

export default HomeScreen