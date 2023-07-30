import { StyleSheet } from 'react-native';

import { isSmallScreenSize } from '../../../../constants/size';

const colorsListItemSize = isSmallScreenSize ? 26 : 36

const ColorsListItemStyles = StyleSheet.create({
    container: {
        width: colorsListItemSize,
        height: colorsListItemSize,
        borderRadius: 50,
        marginLeft: 16,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ColorsListItemStyles