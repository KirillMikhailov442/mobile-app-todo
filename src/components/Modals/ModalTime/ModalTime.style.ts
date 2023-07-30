import { StyleSheet } from 'react-native';
import { textColors } from '../../../constants/colors';

const ModalTimeStyles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        height: 64,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 43,
        marginRight: 43,
        justifyContent: 'center'
    },
    colon: {
        color: textColors.whiteDefault,
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 13,
        marginRight: 13
    }
})

export default ModalTimeStyles