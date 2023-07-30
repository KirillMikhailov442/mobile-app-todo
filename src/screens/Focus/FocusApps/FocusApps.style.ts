import { StyleSheet } from 'react-native';
import { TextStyles } from '../../../styles';
import { isSmallScreenSize } from '../../../constants/size';


const FocusAppsStyles = StyleSheet.create({

    container: {
        paddingBottom: 40
    },

    title: {
        ...TextStyles.text,
        fontSize: isSmallScreenSize ? 18 : 20,
        marginTop: 24
    }
})

export default FocusAppsStyles