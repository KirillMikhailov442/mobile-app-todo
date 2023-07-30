import { StyleSheet } from 'react-native'

import { bgColors } from '../../../constants/colors'
import { isSmallScreenSize } from '../../../constants/size'



const IntroContentStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        resizeMode: 'stretch',
    },
    title: {
        marginTop: isSmallScreenSize ? 20 : 50,
        fontSize: isSmallScreenSize ? 20 : 32
    }, 
    subtitle: {
        marginTop: isSmallScreenSize ? 12 : 42
    },
    indicator: {
        width: 95,
        height: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50
    },
    indicatorItem: {
        height: '100%',
        backgroundColor: bgColors.grayLight,
        borderRadius: 5
    }
})

export default IntroContentStyles