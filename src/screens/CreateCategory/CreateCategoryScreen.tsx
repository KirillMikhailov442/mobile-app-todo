import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

import { ViewStyles } from '../../styles'
import CreateCategoryStyles from './CreateCategory.style'
import { Button, Input } from '../../components/UI'
import ColorList from './ColorsList/ColorsList'
import { NavigationProps } from '../../types/navigation'
import CreateCategoryFooter from './CreateCategoryFooter/CreateCategoryFooter'
import { isSmallScreenSize } from '../../constants/size'

const CreateCategoryScreen: React.FC<Pick<NavigationProps, 'navigation'>> = ({navigation}) =>{

    return(
        <SafeAreaView style={ViewStyles.fullScreen}>
            <View style={[
                ViewStyles.container,
            ]}>
                <Text style={CreateCategoryStyles.title}>Create new category</Text>
                <Input
                    label='Category name:'
                    placeholder={{
                        text: 'Category name'
                    }}
                    styles={{
                        container: {
                            marginTop: 20
                        },
                        input: {
                            height: isSmallScreenSize ? 40 : 48
                        },
                        label: {
                            marginBottom: 16
                        }
                    }}/>
                <Text style={CreateCategoryStyles.label}>Category icon:</Text>
                <Button
                    text='Choose icon from library'
                    styles={{
                        button: CreateCategoryStyles.button,
                        text: CreateCategoryStyles.buttonText
                    }}/>
                <Text style={CreateCategoryStyles.label}>Category color:</Text>
            </View>
            <ColorList/>
            <CreateCategoryFooter navigation={navigation}/>
        </SafeAreaView>
    )
}

export default CreateCategoryScreen