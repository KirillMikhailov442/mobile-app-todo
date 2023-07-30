import React, {useState, useEffect} from 'react'
import { Calendar } from 'react-native-calendars'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { View, Text } from 'react-native'


import { ModalLayout } from '../../../layouts'
import ModalCalendarStyles from './ModalCalendar.style'
import { bgColors, buttonColors, textColors } from '../../../constants/colors'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { hideModal } from '../../../store/slices/modalsSlice'

interface ModalCalendarProps {
    onPressButton?: ()=> void
}

const ModalCalendar: React.FC<ModalCalendarProps> = ({
    onPressButton
}) =>{

    const dispatch = useAppDispatch()
    const [modalState] = useAppSelector(state => state.modals.filter(modal => modal.name === 'calendar'))
    
    const [showModal, setShowModal] = useState(modalState.showModal)
    
    useEffect(()=>{
        setShowModal(modalState.showModal)
    }, [modalState])

    return(
        <ModalLayout
            visibleModal={showModal}
            onPressButton={onPressButton}
            onBackdropPress={()=> dispatch(hideModal('calendar'))}
            buttons={{
                left: {
                    text: 'Cancel'
                },
                right: {
                    text: 'Choose Time'
                }
            }}>
            <Calendar
                dayComponent={({date, state}) => {

                    let dayContainerStyle,
                        dayStyle

                        if(state === 'disabled'){
                            dayContainerStyle = ModalCalendarStyles.dayDisableContainer
                            dayStyle = ModalCalendarStyles.dayDisabled
                        }

                        if(state === 'today'){
                            dayContainerStyle = ModalCalendarStyles.dayTodayContainer
                            dayStyle = ModalCalendarStyles.dayToday
                        }
                    
                    return(
                        <View style={[ModalCalendarStyles.dayContainer, dayContainerStyle]}>
                            <Text style={[ModalCalendarStyles.day, dayStyle]}>{date?.day}</Text>
                        </View>
                    )
                }}
                renderArrow={(direction) =>{
                    if(direction === 'left'){
                        return <Icon name='chevron-left' size={30} color={textColors.whiteDefault}/>
                    }

                    return <Icon name='chevron-right' size={30} color={textColors.whiteDefault}/>
                }}

                style={ModalCalendarStyles.calendar}
                theme={{
                    dayTextColor: textColors.whiteDefault,
                    todayTextColor: textColors.whiteDefault,
                    todayBackgroundColor: textColors.violet,
                    backgroundColor: bgColors.blackVeryLight,
                    calendarBackground: bgColors.blackVeryLight,
                    selectedDayBackgroundColor: buttonColors.violetDefault,
                    textSectionTitleColor: textColors.whiteDefault,
                    textDisabledColor: textColors.grayDefault,
                    textDayFontWeight: 'bold',
                    textDayStyle: {width: 24, height: 24, borderRadius: 6, textAlign: 'center'},
                    monthTextColor: textColors.whiteDefault

                }}/>
        </ModalLayout>
    )
}

export default ModalCalendar