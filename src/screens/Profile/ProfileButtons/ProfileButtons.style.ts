import {StyleSheet} from 'react-native'
import { buttonColors } from '../../../constants/colors'

const ProfileButtonsStyles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    button: {
        height: 58,
        width: 150,
        backgroundColor: buttonColors.grayDefault
    }
})

export default ProfileButtonsStyles