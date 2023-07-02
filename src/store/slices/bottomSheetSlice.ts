import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const BottomSheetSlice = createSlice({
    name: 'bottomSheet',
    initialState: false,
    reducers: {
        toggleState : (state) =>{
            state = !state
        }
    }
})
export const {toggleState} = BottomSheetSlice.actions

export default BottomSheetSlice.reducer
