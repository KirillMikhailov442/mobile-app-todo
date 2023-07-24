import {StyleSheet} from 'react-native'
import { bgColors} from '../../../constants/colors'
import { isSmallScreenSize } from '../../../constants/size'

const taskHeaderPadding = isSmallScreenSize ? 6 : 11
const taskButtonSize = isSmallScreenSize ? 26 : 32

const TaskHeaderStyles = StyleSheet.create({
    container: {
        height: isSmallScreenSize ? 44 : 54,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop:  taskHeaderPadding,
        paddingBottom: taskHeaderPadding,
    },

    button: {
        backgroundColor: bgColors.blackLight,
        width: taskButtonSize,
        height: taskButtonSize,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingLeft: 0,
        paddingRight: 0
    }
})

export default TaskHeaderStyles