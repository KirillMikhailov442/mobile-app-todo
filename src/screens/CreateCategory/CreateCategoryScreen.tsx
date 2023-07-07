import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

import { ViewStyles } from '../../styles'
import CreateCategoryStyles from './CreateCategory.style'
import { Button, Input } from '../../components/UI'
import ColorList from './ColorsList/ColorsList'
import { buttonColors, textColors } from '../../constants/colors'
import { NavigationProps } from '../../types/navigation'
import CreateCategoryFooter from './CreateCategoryFooter/CreateCategoryFooter'

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
                        label: {
                            marginBottom: 16
                        }
                    }}/>
                <Text style={CreateCategoryStyles.label}>Category icon:</Text>
                <Button
                    text='Choose icon from library'
                    styles={{
                        button: CreateCategoryStyles.button
                    }}/>
                <Text style={CreateCategoryStyles.label}>Category color:</Text>
            </View>
            <ColorList/>
            <CreateCategoryFooter navigation={navigation}/>
        </SafeAreaView>
    )
}

export default CreateCategoryScreen