import React from "react"
import { Calendar } from "react-native-calendars"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { ModalLayout } from "../../../layouts"
import ModalCalendarStyles from "./ModalCalendar.style"
import { bgColors, buttonColors, textColors } from "../../../constants/colors"



const ModalCalendar = () =>{

    return(
        <ModalLayout
            visibleModal={true}
            buttons={{
                left: {
                    text: 'Cancel'
                },
                right: {
                    text: 'Choose Time'
                }
            }}>
            <Calendar
                renderArrow={(direction) =>{
                    if(direction === 'left'){
                        return <Icon name="chevron-left" size={30} color={textColors.whiteDefault}/>
                    }

                    return <Icon name="chevron-right" size={30} color={textColors.whiteDefault}/>
                }}
                style={ModalCalendarStyles.calendar}
                theme={{
                    dayTextColor: textColors.whiteDefault,
                    todayTextColor: textColors.violet,
                    backgroundColor: bgColors.blackVeryLight,
                    calendarBackground: bgColors.blackVeryLight,
                    selectedDayBackgroundColor: buttonColors.violetDefault,
                    textSectionTitleColor: textColors.whiteDefault,
                    textDisabledColor: textColors.grayDefault

                }}/>
        </ModalLayout>
    )
}

export default ModalCalendar