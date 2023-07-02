import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface IModalActionPayload {
    name: string,
    showModal: boolean
}

const modalsSlice = createSlice({
    name: 'modal',
    initialState: [
        {
            name: 'calendar',
            showModal: false
        },
        {
            name: 'time',
            showModal: false
        },
        {
            name: 'priority',
            showModal: false
        },
    ],

    reducers: {
        toggleState: (state, action:PayloadAction<IModalActionPayload>) =>{
            state = state.filter(item => item.name === action.payload.name ? item.showModal = action.payload.showModal : item)
        }
    }
})

export default modalsSlice.reducer

export const {toggleState} = modalsSlice.actions