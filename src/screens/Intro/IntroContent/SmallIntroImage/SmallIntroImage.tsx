import React from 'react'
import {Image, View} from 'react-native'
import SmallIntroImageStyles from './SmallIntroImage.style'

interface SmallIntroImageProps {
    imageUrl: any
}


const SmallIntoImage: React.FC<SmallIntroImageProps> = ({
    imageUrl
}) =>{
    return(
        <View style={SmallIntroImageStyles.imageContainer}>
            <Image
                source={imageUrl}
                resizeMode='contain'
                style={SmallIntroImageStyles.image}/>
        </View>
    )
}

export default SmallIntoImage