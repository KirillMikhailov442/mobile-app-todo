import {StyleSheet} from 'react-native'

import { buttonColors } from '../../../constants/colors'
import { isSmallScreenSize, screenWidth } from '../../../constants/size'

const ProfileButtonsStyles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    button: {
        height: isSmallScreenSize ?  50 : 58,
        width: isSmallScreenSize ? 120 : 150,
        backgroundColor: buttonColors.grayDefault
    }
})

export default ProfileButtonsStyles