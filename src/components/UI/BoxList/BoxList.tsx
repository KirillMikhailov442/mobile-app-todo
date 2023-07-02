import React from "react";
import { FlatList, ScrollView, Text, View, Animated } from "react-native";

import BoxListStyles from "./BoxList.style";
import { BoxListProps } from "../../../types";

const BoxList: React.FC<BoxListProps> = ({
    styles,
    data
}) =>{
    return(
        <View style={[
            BoxListStyles.container,
            styles?.container
        ]}>
            <Animated.ScrollView style={[BoxListStyles.container]}>
                <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                bounces={false}
                data={data}
                renderItem={({item}) => <Text style={[BoxListStyles.text]}>{item}</Text>}/>
            </Animated.ScrollView>

        </View>
    )
}

export default BoxList