import React, {useState} from "react"
import {Pressable} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { ColorsListItemProps } from "../../../../types"
import ColorsListItemStyles from "./ColorsListItem.style"
import { textColors } from "../../../../constants/colors"

const ColorsListItem: React.FC<ColorsListItemProps> = ({
    color,
    isSelected
}) =>{

    const [isSelectedColor, setIsSelectedColor] = useState(isSelected)

    return(
        <Pressable
            onPress={()=> setIsSelectedColor(true)}
            style={[
                ColorsListItemStyles.container,
                {backgroundColor: color}
            ]}>
                {isSelected && <Icon name="check" size={20} color={textColors.whiteDefault}/>}
        </Pressable>
    )
}

export default ColorsListItem