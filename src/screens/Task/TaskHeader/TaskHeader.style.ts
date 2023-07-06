import {StyleSheet} from 'react-native'
import { bgColors} from '../../../constants/colors'

const TaskHeaderStyles = StyleSheet.create({
    container: {
        height: 54,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 11,
        paddingBottom: 11,
    },

    button: {
        backgroundColor: bgColors.blackLight,
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0
    }
})

export default TaskHeaderStyles