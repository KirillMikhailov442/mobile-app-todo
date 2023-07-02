import React from 'react'
import {View} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { textColors } from '../../../constants/colors';
import BottomSheetFooterStyles from './BottomSheetFooter.style';

const BottomSheetFooter = () =>{
    return(
        <View style={BottomSheetFooterStyles.footer}>
            <View style={BottomSheetFooterStyles.footerActions}>
                <Icon 
                    name='timer-outline' 
                    size={25} 
                    color={textColors.whiteDefault}/>
                <Icon 
                    name='tag-outline' 
                     size={25} 
                    color={textColors.whiteDefault}
                    style={{marginLeft: 32, marginRight: 32}}/>
                <Icon 
                    name='flag-outline' 
                    size={25} 
                    color={textColors.whiteDefault}/>
            </View>
            <Icon 
                name='send' 
                size={25} 
                color={textColors.violet}/>
        </View>
    )
}

export default BottomSheetFooter