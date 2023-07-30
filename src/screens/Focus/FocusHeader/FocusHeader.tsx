import React from 'react';
import { Text, View } from 'react-native';
import FocusHeaderStyles from './FocusHeader.style';

const FocusHeader = () =>{
    return(
        <View style={FocusHeaderStyles.header}>
            <Text style={FocusHeaderStyles.title}>Focus Mode</Text>
        </View>
    )
}

export default FocusHeader