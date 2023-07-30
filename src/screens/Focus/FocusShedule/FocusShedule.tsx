import React from 'react'
import { Dimensions, Text, View } from 'react-native';
import IconSimpleLine from 'react-native-vector-icons/SimpleLineIcons';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';

import { bgColors, textColors } from '../../../constants/colors';
import FocusSheduleStyles from './FocusShedule.style';
import { Button } from '../../../components/UI';
import { isSmallScreenSize } from '../../../constants/size';


const data = [
    { month: 'SUN', value: 2.3 },
    { month: 'MON', value: 3.3  },
    { month: 'TUE', value: 5 },
    { month: 'WED', value: 3 },
    { month: 'THU', value: 4 },
    { month: 'FRI', value: 4.3 },
    { month: 'SAT', value: 2 },
  ];

const sheduleWidth = Dimensions.get('window').width - 20

const FocuseShedule = () =>{
    return(
        <View style={FocusSheduleStyles.container}>
            <View style={FocusSheduleStyles.header}>
                <Text style={FocusSheduleStyles.title}>Overview</Text>
                <Button
                    text='This week'
                    positinIcon='right'
                    icon={<IconSimpleLine 
                            name='arrow-down' 
                            color={textColors.whiteDefault} 
                            size={10}
                            style={{marginLeft: 10}}/>}
                    styles={{
                        button: FocusSheduleStyles.button,
                        text: FocusSheduleStyles.buttonText
                    }}/>
            </View>
            <VictoryChart 
                width={sheduleWidth}>
                <VictoryBar 
                    animate={{
                        duration: 2000,
                        onLoad: { duration: 1000 }
                    }}
                    data={data} 
                    x='month' 
                    y='value'
                    width={sheduleWidth}
                    barWidth={isSmallScreenSize ? 25 : 30}
                    cornerRadius={{top: 5, bottom: 5}}
                    style={{
                        data: { fill: bgColors.grayLight, borderRadius: 4},
                        labels: { fill: bgColors.grayLight},
                        parent: { borderBottomWidth: 1, borderBottomColor: 'red' }
                    }} 
                    labels={[...data.map(el => el.value)]} />
            </VictoryChart>
        </View>
    )
}

export default FocuseShedule