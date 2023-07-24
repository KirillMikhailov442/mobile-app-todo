
import {StyleSheet} from 'react-native'
import { bgColors, buttonColors, textColors } from '../constants/colors'
import { isSmallScreenSize } from '../constants/size'

const tabBarSize = isSmallScreenSize ? 54 : 64

const TabStyles = StyleSheet.create({
    tabBarContainer: {
        position: 'relative',
        backgroundColor: bgColors.blackVeryLight,
        height: isSmallScreenSize ? 70 : 90,
        paddingTop:  isSmallScreenSize ? 10 : 15,
        paddingBottom: isSmallScreenSize ? 10 : 25,
        borderTopWidth: 0,
        zIndex: 1
    },

    tabBarCenterButton: {
        width: tabBarSize,
        height: tabBarSize,
        backgroundColor: buttonColors.violetDefault,
        borderRadius: 50,
        position: 'absolute',
        top: isSmallScreenSize ? "-110%" : '-130%'
    },

    tabBarItemLabel: {
        color: textColors.whiteDefault,
        fontSize: 12,
        marginTop: isSmallScreenSize ? 4 : 8
    }
})

export default TabStyles