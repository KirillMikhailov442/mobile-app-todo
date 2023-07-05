import React from "react";
import Icon from "react-native-vector-icons/Ionicons"

import { Input } from "../UI";
import { textColors } from "../../constants/colors";
import SearchBarStyles from "./SearchBar.style";


const SearchBar = () =>{
    return(
        <Input
            placeholder={{
                text: 'Search for your task...',
                color: textColors.grayDefault
            }}
            icon={<Icon
                name="search" 
                color={textColors.grayDefault} 
                size={30}
                style={SearchBarStyles.icon}/>}
            styles={{
                inputText: SearchBarStyles.input
            }}/>
    )
}

export default SearchBar