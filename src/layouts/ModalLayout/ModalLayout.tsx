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
    title
}) =>{

    const [showModal, setShowModal] = useState(visibleModal)
    

    return(
        <Modal
            isVisible={showModal}
            onBackdropPress={()=> setShowModal(false)}
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
                        <Button
                            text={buttons?.left.text}
                            onPress={()=> setShowModal(false)}
                            styles={{
                                button: {
                                    ...ModalLayoutStyles.footerButton,

                                    }, 
                                text: {...ModalLayoutStyles.footerButtonText, }, 
                            }}/>

                        <Button
                            text={buttons?.right.text}
                            styles={{
                                button: {
                                    ...ModalLayoutStyles.footerButton,
                                    ...ModalLayoutStyles.footerButtonRight,
                                    ...buttons?.left.styles?.button }, 
                                text: {
                                    ...ModalLayoutStyles.footerButtonText,
                                    ...ModalLayoutStyles.footerButtonTextRight,
                                    ...buttons?.right.styles?.text }, 
                            }}/>

                    </View>
                </View>
        </Modal>
    )
}

export default ModalLayout