import React from "react";
import { View } from "react-native";

import CreateCategoryStyles from "../CreateCategory.style";
import { ViewStyles } from "../../../styles";
import { Button } from "../../../components/UI";
import { NavigationProps } from "../../../types/navigation";
import { textColors, buttonColors } from "../../../constants/colors";
import { isSmallScreenSize } from "../../../constants/size";

const buttonFontSize = isSmallScreenSize ? 14 : 16

const CreateCategoryFooter: React.FC<Pick<NavigationProps, 'navigation'>> = ({navigation}) =>{
    return(
        <View style={[
            CreateCategoryStyles.footer,
            ViewStyles.container
        ]}>
            <Button
                text='Cancel'
                onPress={()=> navigation.goBack()}
                styles={{
                    button: {
                        width: isSmallScreenSize ? 124 : 154,
                    },
                    text: {
                        color: textColors.violet,
                        fontSize: buttonFontSize
                    }
                }}/>

            <Button
                text='Create Category'
                styles={{
                    button: {
                        width: isSmallScreenSize ? 'auto' : 154,
                        backgroundColor: buttonColors.violetDefault
                    },
                    text: {
                        fontSize: buttonFontSize
                    }
                }}/>
        </View>
    )
}

export default CreateCategoryFooter