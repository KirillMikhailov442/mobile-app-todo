import React from "react";
import {View} from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import TaskHeaderStyles from "./TaskHeader.style";
import { textColors } from "../../../constants/colors";
import { Button } from "../../../components/UI";
import { useAppNavigation } from "../../../hooks";


const TaskHeader = () =>{

    const navigation = useAppNavigation()

    return(
        <View style={TaskHeaderStyles.container}>
            <Button
                onPress={()=> navigation.goBack()}
                icon={<Icon name="close" size={25} color={textColors.whiteDefault}/>}
                styles={{
                    button: TaskHeaderStyles.button
                }}/>

            <Button
                icon={<Icon name="reload" size={25} color={textColors.whiteDefault}/>}
                styles={{
                    button: TaskHeaderStyles.button
                }}/>
        </View>
    )
}

export default TaskHeader