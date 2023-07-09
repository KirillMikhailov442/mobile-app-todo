import React from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Image, Text, TouchableOpacity, View} from "react-native";

import FocusAppsItemStyles from "./FocusAppsItem.style";
import { textColors } from "../../../../constants/colors";
import { FocusAppsItemProps } from "../../../../types";


const FocusAppsItem: React.FC<FocusAppsItemProps> = ({
    title,
    subtitle,
    imageUrl
}) =>{

    
    return(
        <TouchableOpacity style={FocusAppsItemStyles.container}>
            <Image 
                source={imageUrl}
                style={FocusAppsItemStyles.image}/>
            <View style={FocusAppsItemStyles.content}>
                <Text style={FocusAppsItemStyles.title}>
                    {title}
                </Text>
                <Text style={FocusAppsItemStyles.subtitle}>
                    {subtitle}
                </Text>
            </View>
            <Icon 
                name="alert-circle-outline" 
                size={30} 
                color={textColors.whiteDefault}
                style={FocusAppsItemStyles.icon}/>
        </TouchableOpacity>
    )
}

export default FocusAppsItem