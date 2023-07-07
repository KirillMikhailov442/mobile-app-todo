import React from 'react'
import {View} from 'react-native'
import SelectTasksStyles from './SelectTasks.style'
import { Button } from '../../../components/UI'

const SelectTasks = () =>{
    return(
        <View style={SelectTasksStyles.container}>
            <Button
                text='Today'
                styles={{
                    button: {...SelectTasksStyles.button, ...SelectTasksStyles.buttonLeft}
                }}/>

            <Button
                text='Completed'
                styles={{
                    button: {...SelectTasksStyles.button, ...SelectTasksStyles.buttonRight}
                }}/>
        </View>
    )
}

export default SelectTasks