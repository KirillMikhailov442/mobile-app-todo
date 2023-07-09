import React from 'react'
import {View} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { textColors } from '../../../../constants/colors';
import BottomSheetAddTaskFooterStyles from './BottomSheetAddTaskFooter.style';

const BottomSheetAddTaskFooter = () =>{
    return(
        <View style={BottomSheetAddTaskFooterStyles.footer}>
            <View style={BottomSheetAddTaskFooterStyles.footerActions}>
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

export default BottomSheetAddTaskFooter