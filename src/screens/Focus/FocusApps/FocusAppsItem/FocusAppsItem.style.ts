import { StyleSheet } from "react-native";

import { bgColors, borderColors } from "../../../../constants/colors";
import { TextStyles } from "../../../../styles";


const FocusAppsItemStyles = StyleSheet.create({
    container: {
        minHeight: 56,
        borderRadius: 5,
        backgroundColor: bgColors.grayDefault,
        marginTop: 16,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 12,
        paddingRight: 12,
        flexDirection: 'row',
        alignItems: 'center'
    },

    image: {
        width: 32,
        height: 32,
        marginRight: 10,
    },

    content: {
        flex: 1,
        borderRightWidth: 2,
        borderRightColor: borderColors.gray,
        marginRight: 16
    },

    title: {
        ...TextStyles.text,
        fontSize: 14,
        marginBottom: 5
    },

    subtitle: {
        ...TextStyles.text,
        fontSize: 12,
    },

    icon: {
        marginLeft: 'auto'
    }
})

export default FocusAppsItemStyles