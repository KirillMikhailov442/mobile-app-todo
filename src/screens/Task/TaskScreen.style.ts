import {StyleSheet} from 'react-native'
import { buttonColors, textColors } from '../../constants/colors'

const TaskScreenStyles = StyleSheet.create({
    preference: {
        marginTop: 26
    },

    preferenceButton: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
        marginLeft: 'auto',
        width: 'auto',
        height: 40,
        backgroundColor: buttonColors.grayDefault
    },

    preferenceText: {
        color: textColors.red
    }
})

export default TaskScreenStyles