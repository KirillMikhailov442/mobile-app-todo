import React from 'react'
import {View, Text} from 'react-native'
import HeaderLayoutStyles from './HeaderLayout.style'
import { HeaderLayoutProps } from '../../types'

const HeaderLayout: React.FC<HeaderLayoutProps> = ({
    title,
    styles,
    children
}) =>{

    if(!children){
        return(
            <View style={[
                HeaderLayoutStyles.header,
                styles && {...styles.header}
            ]}>
                <Text style={[
                    HeaderLayoutStyles.title,
                    styles && {...styles.title}
                ]}>{title}</Text>
            </View>
        )
    }

    return(
        <View style={[
            HeaderLayoutStyles.header,
            styles && {...styles.header}
        ]}>
            {children}
        </View>
    )
}

export default HeaderLayout