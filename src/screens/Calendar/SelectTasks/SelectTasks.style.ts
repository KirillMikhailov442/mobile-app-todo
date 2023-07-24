import {StyleSheet} from 'react-native'
import { bgColors, borderColors, buttonColors } from '../../../constants/colors'
import { isSmallScreenSize } from '../../../constants/size'

const SelectTasksStyles = StyleSheet.create({
    container: {
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
        width: isSmallScreenSize ? 120 : 140
    },

    buttonLeft: {
        backgroundColor: buttonColors.violetDefault,
        marginRight: 'auto'
    },

    buttonRight: {
        borderColor: borderColors.gray,
        borderWidth: 2,
        marginLeft: 'auto'
    }
})

export default SelectTasksStyles