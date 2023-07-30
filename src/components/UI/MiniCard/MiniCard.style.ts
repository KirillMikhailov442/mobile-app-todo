import { StyleSheet } from 'react-native';


import { TextStyles } from '../../../styles';
import { bgColors, textColors } from '../../../constants/colors';
import { isSmallScreenSize } from '../../../constants/size';


const miniCardSize = isSmallScreenSize ? 50 : 64

const MiniCardStyles = StyleSheet.create({
    container: {
        width: miniCardSize
    },
    card: {
        width: '100%',
        height: miniCardSize,
        backgroundColor: bgColors.blackLight,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    cardText: {
        ...TextStyles.text,
        marginTop: 5
    },  

    bottomLabel: {
        marginTop: 5,
        fontSize: isSmallScreenSize ? 10 : 12,
        color: textColors.whiteDefault,
        textAlign: 'center'
    }
})

export default MiniCardStyles