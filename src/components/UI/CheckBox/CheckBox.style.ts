import { StyleSheet } from 'react-native';

import { borderColors, textColors } from '../../../constants/colors';
import { isSmallScreenSize } from '../../../constants/size';

const checkboxHeight = isSmallScreenSize ? 14 : 16

const CheckBoxStyles = StyleSheet.create({
    container: {
        width: checkboxHeight,
        height: checkboxHeight,
        borderRadius: 50,
        borderColor: borderColors.white,
        borderWidth: 1.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkBox: {
        borderRadius: 50,
        width: checkboxHeight / 2,
        height: checkboxHeight / 2
    },

    checkBoxActive: {
        backgroundColor: textColors.violet
    }
})

export default CheckBoxStyles