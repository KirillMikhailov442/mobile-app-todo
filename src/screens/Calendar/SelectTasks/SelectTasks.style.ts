import {StyleSheet} from 'react-native'
import { bgColors, borderColors, buttonColors } from '../../../constants/colors'

const SelectTasksStyles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: bgColors.blackVeryLight,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: 20
    },

    button: {
        width: 140
    },

    buttonLeft: {
        backgroundColor: buttonColors.violetDefault
    },

    buttonRight: {
        borderColor: borderColors.gray,
        borderWidth: 2
    }
})

export default SelectTasksStyles