import { StyleSheet } from 'react-native'
import { bgColors, borderColors } from '../../../constants/colors'
import { isSmallScreenSize } from '../../../constants/size'

const bottomSheetAddTaskPadding = isSmallScreenSize ? 14 : 24
const inputHeight = isSmallScreenSize ? 38 : 43

const BottomSheetAddTaskStyles = StyleSheet.create({
    container: {
        height: isSmallScreenSize ? 200 : 250,
        // maxHeight: 500,
        // minHeight: 200,
        backgroundColor: bgColors.blackVeryLight,
        marginTop: 'auto',
        paddingLeft: bottomSheetAddTaskPadding,
        paddingRight: bottomSheetAddTaskPadding,
        paddingTop: bottomSheetAddTaskPadding,
        paddingBottom: isSmallScreenSize ? 10 : 18,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    title: {
        marginTop: 0,
        fontSize: isSmallScreenSize ? 18 : 20,
        fontWeight: 'bold'
    },
    inputContainer: {
        height: inputHeight,
        borderColor: borderColors.gray,
        marginTop: isSmallScreenSize ? 10 : 14
    },

    input: {
        backgroundColor: bgColors.transparent,
        height: inputHeight,
    },
    inputText: {
        fontSize: 18
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 'auto'
    },

    footerActions: {
        flexDirection: 'row'
    },

    footerActionsItem: {

    }
})

export default BottomSheetAddTaskStyles