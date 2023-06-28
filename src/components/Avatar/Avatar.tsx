import React from 'react';
import {Image} from 'react-native'
import AvatarStyles from './Avatar.style';
import { AvatarProps } from '../../types';

const Avatar: React.FC<AvatarProps> = ({
    style
})=> {
    return (
        <Image
            source={require('../../assets/images/user.png')}
            style={[
                AvatarStyles.avatar,
                style && {...style}
            ]}/>
    )
}

export default Avatar;