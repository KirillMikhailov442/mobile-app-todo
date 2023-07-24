import {StyleSheet} from 'react-native'
import { buttonColors, textColors } from '../../constants/colors'
import { isSmallScreenSize } from '../../constants/size'
import { ViewStyles } from '../../styles'

const preferenceButtonPadding = isSmallScreenSize ? 12 : 16

const TaskScreenStyles = StyleSheet.create({

    content: {
        flex: 1
    },

    preference: {
        marginTop: isSmallScreenSize ? 16 : 26
    },

    preferenceButton: {
        paddingLeft: preferenceButtonPadding,
        paddingRight: preferenceButtonPadding,
        marginLeft: 'auto',
        width: 'auto',
        height: isSmallScreenSize ? 35 : 40,
        backgroundColor: buttonColors.grayDefault
    },

    preferenceButtonText: {
        fontSize: isSmallScreenSize ? 12 : 16
    },

    preferenceTextDelete: {
        color: textColors.red
    }
})

export default TaskScreenStyles