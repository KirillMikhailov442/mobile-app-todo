import {StyleSheet} from 'react-native'
import { TextStyles } from '../../../styles'
import { textColors } from '../../../constants/colors'
import { isSmallScreenSize } from '../../../constants/size'

const ChangeableTaskStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 20
    },
    content: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        flex: 1,
        paddingLeft: 20,
        paddingRight :20
    },
    title: {
        ...TextStyles.text,
        fontSize: isSmallScreenSize ? 18 : 20
    },
    subtitle: {
        ...TextStyles.text,
        color: textColors.grayDark,
        fontSize: isSmallScreenSize ? 12 : 14
    }
})

export default ChangeableTaskStyles