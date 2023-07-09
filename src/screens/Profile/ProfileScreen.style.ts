import {StyleSheet} from 'react-native'
import { bgColors } from '../../constants/colors'
import { TextStyles } from '../../styles'

const ProfileScreenStyles = StyleSheet.create({
    container: {
        backgroundColor: bgColors.blackDefault,
        
    },

    avatar: {
        width: 85,
        height: 85,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10,
        marginTop: 14
    },

    fullName: {
        ...TextStyles.text,
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20
    }
})

export default ProfileScreenStyles