import React, { useState } from "react";
import Modal from 'react-native-modal'
import { ModalLayoutProps } from "../../types";
import { View } from "react-native";
import ModalLayoutStyles from "./ModalLayout.style";
import { Button } from "../../components/UI";
import { Text } from "react-native";

const ModalLayout: React.FC<ModalLayoutProps> = ({
    children,
    styles,
    buttons,
    visibleModal,
    title,
    onPressButton,
    onBackdropPress
}) =>{    

    return(
        <Modal
            isVisible={visibleModal}
            onBackdropPress={onBackdropPress}
            style={ModalLayoutStyles.modal}>
                <View style={[
                    ModalLayoutStyles.container,
                    styles && {...styles.container}
                ]}>
                    {title && 
                        <View style={[
                            ModalLayoutStyles.header,
                            styles && {...styles.header}
                        ]}>
                            <Text style={[
                                ModalLayoutStyles.headerTitle,
                                styles && {...styles.title}
                            ]}>{title}</Text>
                        </View>}
                    {children}
                    <View style={[
                        ModalLayoutStyles.footer
                    ]}>
                        {buttons?.left && 
                            <Button
                            text={buttons?.left.text}
                            onPress={onBackdropPress}
                            styles={{
                                button: {
                                    ...ModalLayoutStyles.footerButton,
                                    ...buttons?.left.styles?.button

                                    }, 
                                text: {
                                    ...ModalLayoutStyles.footerButtonText, 
                                    ...buttons?.left.styles?.text
                                }, 
                            }}/>}

                        {buttons?.right && 
                            <Button
                            text={buttons?.right.text}
                            onPress={onPressButton}
                            styles={{
                                button: {
                                    ...ModalLayoutStyles.footerButton,
                                    ...ModalLayoutStyles.footerButtonRight,
                                    ...buttons?.right.styles?.button }, 
                                text: {
                                    ...ModalLayoutStyles.footerButtonText,
                                    ...ModalLayoutStyles.footerButtonTextRight,
                                    ...buttons?.right.styles?.text }, 
                            }}/>}

                    </View>
                </View>
        </Modal>
    )
}

export default ModalLayout