import {StyleSheet, Dimensions} from 'react-native'

import { bgColors } from '../../../constants/colors'



const IntroContentStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    imageContainer: {
        width: '100%',
        height: 100,
        paddingLeft: 50,
        paddingRight: 50,
        backgroundColor: 'red'
    },
    image: {
        resizeMode: 'stretch',
    },
    title: {
        marginTop: 50,
    }, 
    subtitle: {
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