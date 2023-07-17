import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import Modal from 'react-native-modal';
import BottomSheetChangeImageStyles from "./BottomSheetChangeImage.style";
import Preference from "../../Preference/Preference";
import { useDispatch, useSelector } from "react-redux";
import { hideBottomSheet } from "../../../store/slices/bottomSheetSlice";


const BottomSheetChangeImage = () =>{

    const dispatch = useDispatch()
    const [bottomSheetState] = useSelector(state => state.bottomSheets.filter(item => item.name === 'changeImage'))
    

    const [showBottomSheet, setShowBottomSheet] = useState(bottomSheetState.showBottomSheet)

    useEffect(()=>{
        setShowBottomSheet(bottomSheetState.showBottomSheet)
    }, [bottomSheetState])

    return(
        <Modal
            swipeDirection={"down"}
            isVisible={showBottomSheet}
            style={{margin: 0}}
            onBackdropPress={()=> dispatch(hideBottomSheet('changeImage'))}>
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