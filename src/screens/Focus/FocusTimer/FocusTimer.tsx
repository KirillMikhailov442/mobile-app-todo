import React, {useState} from 'react';
import { View, Text} from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

import FocusTimerStyles from './FocusTimer.style';
import { Button } from '../../../components/UI';
import { isSmallScreenSize } from '../../../constants/size';


const FocusTimer = () =>{

    const [isWorkTimer, setIsWorkTimer] = useState(false)

    return(
        <View style={FocusTimerStyles.container}>
            <CountdownCircleTimer
                duration={60*60}
                isPlaying={isWorkTimer}
                size={ isSmallScreenSize ? 193 : 213}
                colors={['#8687E7', '#8687E7', '#8687E7', '#8687E7']}
                colorsTime={[1, 2]}>
                        {({ remainingTime }) => 
                            <Text style={FocusTimerStyles.timerText}>
                                {Math.floor(remainingTime / 60)} 
                                :
                                { remainingTime % 60 === 0 ? '00' : remainingTime % 60 }
                            </Text>}
            </CountdownCircleTimer>
            <Text style={FocusTimerStyles.subtimer}>
                While your focus mode is on, all of your notifications will be off
            </Text>
            <Button
                text={isWorkTimer ? 'Stop Focusing' : 'Start Focusing'}
                onPress={()=> setIsWorkTimer(prev => !prev)}
                styles={{
                    button: FocusTimerStyles.button
                }}/>
        </View>
    )
}

export default FocusTimer