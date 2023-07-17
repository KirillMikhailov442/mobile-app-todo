import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IBottomSheetPayloadAction {
    name: string,
    showBottomSheet: boolean
}

const initialState: IBottomSheetPayloadAction[] = [
    {
        name: 'addTask',
        showBottomSheet: false
    },
    {
        name: 'changeImage',
        showBottomSheet: false
    }
]

const bottomSheetSlice = createSlice({
    name: 'bottomSheets',
    initialState,
    reducers: {
        showBottomSheet: (state, {payload}: PayloadAction<string>) =>{
            state.find(bottomSheet => 
                bottomSheet.name === payload ? 
                bottomSheet.showBottomSheet = true :
                bottomSheet.showBottomSheet = false)

        },

        hideBottomSheet: (state, {payload}: PayloadAction<string>) =>{
            state.find(bottomSheet => 
                bottomSheet.name === payload ? 
                bottomSheet.showBottomSheet = false :
                bottomSheet.showBottomSheet = false)
        },
    }
})

export default bottomSheetSlice.reducer

export const {showBottomSheet, hideBottomSheet} = bottomSheetSlice.actions