import React from 'react';
import { View, ScrollView } from 'react-native';

import FocusScreenStyles from './FocusScreen.style';
import FocusHeader from './FocusHeader/FocusHeader';
import FocusApps from './FocusApps/FocusApps';
import { ViewStyles } from '../../styles';
import FocusTimer from './FocusTimer/FocusTimer';
import FocuseShedule from './FocusShedule/FocusShedule';
import AddTask from '../../components/AddTask/AddTask';


const FocusScreen = () =>{
    return(
        <View style={ViewStyles.fullScreen}>
            <FocusHeader/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={FocusScreenStyles.content}>
                <FocusTimer/>
                <FocuseShedule/>
                <FocusApps/>
            </ScrollView>
            <AddTask/>
        </View>
    )
}

export default FocusScreen