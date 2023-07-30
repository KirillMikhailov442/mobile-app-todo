import React from "react"
import { SafeAreaView } from "react-native"


import HomeContent from "./HomeContent/HomeContent"
import HomeHeader from "./HomeHeader/HomeHeader"
import HomeEmpty from "./HomeEmpty/HomeEmpty"
import { NavigationProps } from "../../types/navigation"
import HomeScreenStyles from "./HomeScreen.style"
import AddTask from "../../components/AddTask/AddTask"

const HomeScreen:React.FC<Pick<NavigationProps, 'navigation'>> = ({navigation}) =>{

    return(
        <SafeAreaView style={HomeScreenStyles.container}>
            <HomeHeader/>
            <HomeContent/>
            {/* <HomeEmpty/> */}
           <AddTask/>
        </SafeAreaView>
    )
}

export default HomeScreen