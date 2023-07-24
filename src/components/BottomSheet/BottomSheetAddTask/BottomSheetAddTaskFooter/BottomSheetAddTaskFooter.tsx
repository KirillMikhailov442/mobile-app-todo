import React from 'react'
import {View} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { textColors } from '../../../../constants/colors';
import BottomSheetAddTaskFooterStyles from './BottomSheetAddTaskFooter.style';
import { useDispatch } from 'react-redux';
import { showModal } from '../../../../store/slices/modalsSlice';
import { isSmallScreenSize } from '../../../../constants/size';
import { hideBottomSheet } from '../../../../store/slices/bottomSheetSlice';


const iconSize = isSmallScreenSize ? 20 : 25
const iconMargin = isSmallScreenSize ? 25 : 32

const BottomSheetAddTaskFooter = () =>{

    const dispatch = useDispatch()

    return(
        <View style={BottomSheetAddTaskFooterStyles.footer}>
            <View style={BottomSheetAddTaskFooterStyles.footerActions}>
                <Icon 
                    name='timer-outline' 
                    onPress={()=> dispatch(showModal('calendar'))}
                    size={iconSize} 
                    color={textColors.whiteDefault}/>
                <Icon 
                    name='tag-outline' 
                    onPress={()=> dispatch(showModal('category'))}
                    size={iconSize} 
                    color={textColors.whiteDefault}
                    style={{marginLeft: iconMargin, marginRight: iconMargin}}/>
                <Icon 
                    name='flag-outline' 
                    onPress={()=> dispatch(showModal('priority'))}
                    size={iconSize} 
                    color={textColors.whiteDefault}/>
            </View>
            <Icon 
                name='send'
                onPress={()=> dispatch(hideBottomSheet('addTask'))}
                size={iconSize} 
                color={textColors.violet}/>
        </View>
    )
}

export default BottomSheetAddTaskFooter