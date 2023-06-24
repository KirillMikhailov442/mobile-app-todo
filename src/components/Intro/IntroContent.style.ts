import {StyleSheet} from 'react-native'
import { bgColors } from '../../constants/colors'

const IntroContentStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        
    },
    title: {
        marginTop: 50,
    }, 
    subTitle: {
        marginTop: 42
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