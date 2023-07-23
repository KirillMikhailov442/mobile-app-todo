import React, {useState, useEffect} from "react"
import {Pressable, Text} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { ColorsListItemProps } from "../../../../types"
import ColorsListItemStyles from "./ColorsListItem.style"
import { textColors } from "../../../../constants/colors"
import { useAppDispatch, useAppSelector } from "../../../../hooks"
import { selectColor } from "../../../../store/slices/colorsSlice"

const ColorsListItem: React.FC<ColorsListItemProps> = ({
    color,
    isSelected
}) =>{

    const dispatch = useAppDispatch()

    const [colorState] = useAppSelector(state => state.colors.filter(item => item.color === color))

    const [colorsItem, setColorsItem] = useState(colorState)

    useEffect(()=>{
        setColorsItem(colorState)
    }, [colorState])
    

    return(
        <Pressable
            onPress={()=> dispatch(selectColor(color))}
            style={[
                ColorsListItemStyles.container,
                {backgroundColor: colorsItem.color}
            ]}>
                {colorsItem.isSelected && <Icon name="check" size={20} color={textColors.whiteDefault}/>}
        </Pressable>
    )
}

export default ColorsListItem