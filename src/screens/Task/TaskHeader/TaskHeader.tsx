import React from "react";
import {View} from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import TaskHeaderStyles from "./TaskHeader.style";
import { textColors } from "../../../constants/colors";
import { Button } from "../../../components/UI";
import { useAppNavigation } from "../../../hooks";
import { isSmallScreenSize } from "../../../constants/size";

const iconSize = isSmallScreenSize ? 20 : 25

const TaskHeader = () =>{

    const navigation = useAppNavigation()

    return(
        <View style={TaskHeaderStyles.container}>
            <Button
                onPress={()=> navigation.goBack()}
                icon={<Icon name="close" size={iconSize} color={textColors.whiteDefault}/>}
                styles={{
                    button: TaskHeaderStyles.button
                }}/>

            <Button
                icon={<Icon name="reload" size={iconSize} color={textColors.whiteDefault}/>}
                styles={{
                    button: TaskHeaderStyles.button
                }}/>
        </View>
    )
}

export default TaskHeader