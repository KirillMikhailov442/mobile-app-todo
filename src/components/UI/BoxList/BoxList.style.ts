import { StyleSheet } from 'react-native';
import { bgColors, textColors } from '../../../constants/colors';

const BoxListStyles = StyleSheet.create({
    container: {
        width: 64,
        height: 64,
        borderRadius: 5,
        backgroundColor: bgColors.blackDefault
    },

    text: {
        color: textColors.grayDark,
        textAlign: 'center',
        fontSize :24,
        fontWeight: '700',
        marginTop: 14,
        marginBottom: 14
    }
})

export default BoxListStyles