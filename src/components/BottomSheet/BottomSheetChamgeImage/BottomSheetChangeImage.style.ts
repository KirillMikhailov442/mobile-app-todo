import { StyleSheet } from 'react-native';
import { bgColors, borderColors } from '../../../constants/colors';
import { TextStyles } from '../../../styles';
import { isSmallScreenSize } from '../../../constants/size';


const BottomSheetChangeImageStyles = StyleSheet.create({
    container : {
        width: '100%',
        height: isSmallScreenSize ? 220 : 250,
        backgroundColor: bgColors.blackVeryLight,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 24,
        paddingRight: 24,
        marginTop: 'auto'
    },
    header: {
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: borderColors.gray,
        height: 35,
        marginBottom: 16
    },

    title: {
        ...TextStyles.text,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default BottomSheetChangeImageStyles