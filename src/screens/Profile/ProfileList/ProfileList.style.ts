import {StyleSheet} from 'react-native'

import { textColors } from '../../../constants/colors'

const ProfileListStyles = StyleSheet.create({
    container: {
        paddingBottom: 50
    },
    section: {
        marginTop: 16
    },
    sectionTitle: {
        color: textColors.grayDefault,
        fontSize: 14
    },

    preference: {
        marginTop: 8
    },

    preferenceExit: {
        color: textColors.red
    }
})

export default ProfileListStyles