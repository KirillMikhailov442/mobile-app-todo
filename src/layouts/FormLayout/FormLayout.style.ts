import { StyleSheet } from 'react-native';
import { bgColors, borderColors, textColors } from '../../constants/colors';


const FormLayoutStyles = StyleSheet.create({
    container: {
        flex: 1
    },

    title: {
        marginTop: 28
    },

    footer: {
    },

    divider: {
        position: 'relative',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30
    },

    dividerLine: {
        backgroundColor: borderColors.gray,
        height: 1,
        width: '100%',
        position: 'absolute',
        top: '50%'
    },

    dividerText: {
        color: borderColors.gray,
        backgroundColor: bgColors.blackDefault,
        width: 20
    },

    bottomText: {
        fontSize: 12,
        color: textColors.grayDark,
        marginTop: 46,
        marginBottom: 20
    },

    bottomTextLink: {
        color: textColors.whiteDefault,
    }
    
})

export default FormLayoutStyles