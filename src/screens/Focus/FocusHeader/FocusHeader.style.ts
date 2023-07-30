import { StyleSheet } from 'react-native';
import { TextStyles } from '../../../styles';
import { bgColors } from '../../../constants/colors';


const FocusHeaderStyles = StyleSheet.create({
    header: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: bgColors.blackDefault
    },

    title: {
        ...TextStyles.text,
        fontSize: 20
    }
})

export default FocusHeaderStyles