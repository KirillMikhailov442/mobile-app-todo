import React, {useEffect, useState} from "react";
import { FlatList, View } from "react-native";

import ColorsListItem from "./ColorsListItem/ColorsListItem";
import ColorsListStyles from "./ColorsList.style";
import { useAppDispatch, useAppSelector } from "../../../hooks";


const ColorList = () =>{

    const dispatch = useAppDispatch()
    const colors = useAppSelector(state => state.colors)

    const [listColors, setListColors] = useState(colors)

    useEffect(()=>{
        setListColors(colors)
    }, [colors])

    return(
        <View style={ColorsListStyles.container}>
            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={listColors}
            contentContainerStyle={ColorsListStyles.container}
            renderItem={({item}) => <ColorsListItem  {...item}/>}
            />
        </View>
    )
}

export default ColorList