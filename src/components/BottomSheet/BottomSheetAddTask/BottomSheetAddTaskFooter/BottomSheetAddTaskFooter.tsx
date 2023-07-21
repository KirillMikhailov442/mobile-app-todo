import React from 'react'
import {View} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { textColors } from '../../../../constants/colors';
import BottomSheetAddTaskFooterStyles from './BottomSheetAddTaskFooter.style';
import { useDispatch } from 'react-redux';
import { showModal } from '../../../../store/slices/modalsSlice';

const BottomSheetAddTaskFooter = () =>{

    const dispatch = useDispatch()

    return(
        <View style={BottomSheetAddTaskFooterStyles.footer}>
            <View style={BottomSheetAddTaskFooterStyles.footerActions}>
                <Icon 
                    name='timer-outline' 
                    onPress={()=> dispatch(showModal('calendar'))}
                    size={25} 
                    color={textColors.whiteDefault}/>
                <Icon 
                    name='tag-outline' 
                    onPress={()=> dispatch(showModal('category'))}
                    size={25} 
                    color={textColors.whiteDefault}
                    style={{marginLeft: 32, marginRight: 32}}/>
                <Icon 
                    name='flag-outline' 
                    onPress={()=> dispatch(showModal('priority'))}
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