import { StyleSheet } from 'react-native';

import { TextStyles } from '../../../styles';
import { textColors } from '../../../constants/colors';
import { isSmallScreenSize } from '../../../constants/size';

const HomeEmptyStyles = StyleSheet.create({
    container: {
        marginTop: isSmallScreenSize ? 0 : 75,
        alignItems: 'center'
    },

    image: {
        width: isSmallScreenSize ? 180 : 400
    },

    title: {
        marginTop: 10,
        color: textColors.whiteDefault,
        fontSize: isSmallScreenSize ? 18 : 20
    },

    subtitle: {
        ...TextStyles.text,
        marginTop: 10
    }
})

export default HomeEmptyStyles