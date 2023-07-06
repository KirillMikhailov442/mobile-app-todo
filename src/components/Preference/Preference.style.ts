import {StyleSheet} from 'react-native'
import { TextStyles } from '../../styles'

const PreferenceStyles = StyleSheet.create({
    container: {
        height: 48,
        flexDirection: 'row',
        alignItems: 'center'
    },

    text: {
        ...TextStyles.text,
        marginLeft: 10
    },

    button: {
        marginLeft: 'auto'
    }
})

export default PreferenceStyles