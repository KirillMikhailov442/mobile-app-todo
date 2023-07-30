import React from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import MiniCardStyles from './MiniCard.style';
import { MiniCardProps } from '../../../types';


const MiniCard: React.FC<MiniCardProps> = ({
    icon,
    cardText,
    bottomLabel,
    onPress,
    styles
}) =>{
    return(
        <TouchableOpacity
            onPress={onPress}
            style={[
                MiniCardStyles.container,
                styles?.container
        ]}>
            <View style={[
                MiniCardStyles.card,
                styles?.card
            ]}>
                {icon}
                {cardText && 
                    <Text style={[
                        MiniCardStyles.cardText,
                        styles?.cardText
                    ]}>{cardText}</Text>}
            </View>
            {bottomLabel && 
                <Text style={[
                    MiniCardStyles.bottomLabel,
                    styles?.bottomLabel
                ]}>{bottomLabel}</Text>}
        </TouchableOpacity>
    )
}

export default MiniCard