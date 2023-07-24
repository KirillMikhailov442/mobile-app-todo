import React from 'react';
import {Image, View, Pressable, TouchableOpacity} from 'react-native'
import AvatarStyles from './Avatar.style';
import { AvatarProps } from '../../../types';

const Avatar: React.FC<AvatarProps> = ({
    onPress,
    isActive,
    style
})=> {

    if(isActive){
        return(
            <TouchableOpacity
                onPress={onPress} 
                style={[
                    AvatarStyles.avatarContainer,
                    style
            ]}>
                <Image
                    source={require('../../../assets/images/user/user-2.png')}
                    style={AvatarStyles.avatar}/>
            </TouchableOpacity>
        )
    }

    return (
        <View
            style={[
                AvatarStyles.avatarContainer,
                style
            ]}>
            <Image
            source={require('../../../assets/images/user/user-2.png')}
            style={AvatarStyles.avatar}/>
        </View>
    )
}

export default Avatar;