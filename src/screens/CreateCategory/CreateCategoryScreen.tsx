import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

import { ViewStyles } from '../../styles'
import CreateCategoryStyles from './CreateCategory.style'
import { Button, Input } from '../../components/UI'
import ColorList from './ColorsList/ColorsList'
import { buttonColors, textColors } from '../../constants/colors'
import { NavigationProps } from '../../types/navigation'

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
        </SafeAreaView>
    )
}

export default CreateCategoryScreen