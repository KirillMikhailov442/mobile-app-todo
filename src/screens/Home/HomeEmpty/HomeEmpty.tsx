import React from "react";
import { View, Image, Text } from "react-native";
import { ViewStyles } from "../../../styles";
import HomeEmptyStyles from "./HomeEmpty.style";


const HomeEmpty = () =>{
    return(
        <View style={[
            ViewStyles.container,
            HomeEmptyStyles.container
        ]}>
            <Image source={require('../../../assets/images/check-list.png')}/>
            <Text style={HomeEmptyStyles.title}>What do you want to do today?</Text>
            <Text style={HomeEmptyStyles.subtitle}>Tap + to add your tasks</Text>
        </View>
    )
}

export default HomeEmpty