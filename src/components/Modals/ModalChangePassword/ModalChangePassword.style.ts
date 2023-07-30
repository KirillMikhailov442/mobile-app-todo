import { StyleSheet } from 'react-native';

import { bgColors } from '../../../constants/colors';
import { isSmallScreenSize } from '../../../constants/size';

const inputHeight = isSmallScreenSize ? 40 : 48

const ModalChangePassowrdStyles = StyleSheet.create({
    inputContainer: {
        marginTop: 10,
        width: '95%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },

    input: {
        height: inputHeight,
        backgroundColor: bgColors.transparent,
    }
})

export default ModalChangePassowrdStyles