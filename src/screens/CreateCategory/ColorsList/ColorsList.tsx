import React from "react";
import { FlatList, View } from "react-native";

import ColorsListItem from "./ColorsListItem/ColorsListItem";
import ColorsListStyles from "./ColorsList.style";

interface IColors {
    color: string,
    isSelected: boolean
}

const colors: IColors[] = [
    {
        color: '#C9CC41',
        isSelected: false
    },
    {
        color: '#66CC41',
        isSelected: false
    },
    {
        color: '#41CCA7',
        isSelected: false
    },
    {
        color: '#4181CC',
        isSelected: false
    },
    {
        color: '#41A2CC',
        isSelected: false
    },
    {
        color: '#CC8441',
        isSelected: false
    },
    {
        color: '#9741CC',
        isSelected: false
    },
    {
        color: '#CC4173',
        isSelected: false
    }
]

const ColorList = () =>{
    return(
        <View style={ColorsListStyles.container}>
            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={colors}
            contentContainerStyle={ColorsListStyles.container}
            renderItem={({item}) => <ColorsListItem  {...item}/>}
            />
        </View>
    )
}

export default ColorList