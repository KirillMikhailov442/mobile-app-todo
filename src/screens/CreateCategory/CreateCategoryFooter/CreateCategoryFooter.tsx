import React from "react";
import { View } from "react-native";

import CreateCategoryStyles from "../CreateCategory.style";
import { ViewStyles } from "../../../styles";
import { Button } from "../../../components/UI";
import { NavigationProps } from "../../../types/navigation";
import { textColors, buttonColors } from "../../../constants/colors";

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
                        width: 154,
                    },
                    text: {
                        color: textColors.violet
                    }
                }}/>

            <Button
                text='Create Category'
                styles={{
                    button: {
                        width: 154,
                        backgroundColor: buttonColors.violetDefault
                    }
                }}/>
        </View>
    )
}

export default CreateCategoryFooter