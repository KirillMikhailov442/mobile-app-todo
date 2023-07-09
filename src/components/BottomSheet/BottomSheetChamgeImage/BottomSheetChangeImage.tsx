import React, { useState } from "react";
import { Text, View } from "react-native";
import Modal from 'react-native-modal';
import BottomSheetChangeImageStyles from "./BottomSheetChangeImage.style";
import Preference from "../../Preference/Preference";


const BottomSheetChangeImage = () =>{

    const [showModal, setShowModal] = useState(true)

    return(
        <Modal
            swipeDirection={"down"}
            isVisible={showModal}
            style={{margin: 0}}
            onBackdropPress={()=> setShowModal(false)}>
                <View style={BottomSheetChangeImageStyles.container}>
                    <View style={BottomSheetChangeImageStyles.header}>
                        <Text style={BottomSheetChangeImageStyles.title}>
                            Change account image
                        </Text>
                    </View>
                    <Preference
                        text="Tack picture"
                        showButton={false}/>

                    <Preference
                        text="Import from gallery"
                        showButton={false}/>

                    <Preference
                        text="Import from Google Drive"
                        showButton={false}/>
                </View>
        </Modal>
    )
}

export default BottomSheetChangeImage