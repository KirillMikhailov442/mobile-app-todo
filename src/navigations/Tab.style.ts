
import {StyleSheet} from 'react-native'
import { bgColors, buttonColors, textColors } from '../constants/colors'

const TabStyles = StyleSheet.create({
    tabBarContainer: {
        position: 'relative',
        backgroundColor: bgColors.blackVeryLight,
        height: 90,
        paddingTop: 15,
        paddingBottom: 25,
        borderTopWidth: 0
    },

    tabBarCenterButton: {
        width: 64,
        height: 64,
        backgroundColor: buttonColors.violetDefault,
        borderRadius: 50,
        position: 'absolute',
        top: '-130%'
    },

    tabBarItemLabel: {
        color: textColors.whiteDefault,
        fontSize: 12,
        marginTop: 8
    }
})

export default TabStyles