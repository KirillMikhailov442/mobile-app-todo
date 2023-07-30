import { StyleSheet } from 'react-native';
import { bgColors, borderColors, buttonColors, textColors } from '../../constants/colors';
import { TextStyles } from '../../styles';
import { isSmallScreenSize } from '../../constants/size';

const ModalLayoutStyles = StyleSheet.create({

    modal: {
        marginLeft: 24,
        marginRight: 24,
    },
    container: {
        width: '100%',
        marginTop: 'auto',
        backgroundColor: bgColors.blackVeryLight,
        marginBottom: 'auto',
        padding: 8,
        borderRadius: 4
    },

    header:{
        borderBottomColor: borderColors.gray,
        borderBottomWidth: 1
    },
    headerTitle: {
        textAlign: 'center',
        marginBottom: 10,
        ...TextStyles.text,
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },

    footerButton: {
        // 154
        width: isSmallScreenSize ? 120 : 140,
        height: isSmallScreenSize ? 40 : 48,
        backgroundColor: bgColors.transparent,

    },
    footerButtonRight: {
        backgroundColor: buttonColors.violetDefault,
    },

    footerButtonText: {
        color: textColors.violet,
        fontSize: isSmallScreenSize ? 14 : 16
    },

    footerButtonTextRight: {
        color: textColors.whiteDefault
    }
})

export default ModalLayoutStyles