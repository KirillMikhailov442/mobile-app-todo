import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface IModalActionPayload {
    name: string,
    showModal: boolean
}

const initialState: IModalActionPayload[] = [
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
    {
        name: 'category',
        showModal: false
    },
    {
        name: 'editTitle',
        showModal: false
    },
    {
        name: 'delete',
        showModal: false
    },
    {
        name: 'changeName',
        showModal: false
    },
    {
        name: 'changePassword',
        showModal: false
    }
]

const modalsSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        showModal: (state, {payload}: PayloadAction<string>) => {
            
            state.find(modal => 
                modal.name === payload ? 
                modal.showModal = true :
                modal.showModal = false) 
        },

        hideModal: (state, {payload}: PayloadAction<string>) => {

            state.find(modal => 
                modal.name === payload ? 
                modal.showModal = false :
                modal.showModal = false)
        }
    }
})

export default modalsSlice.reducer

export const {showModal, hideModal} = modalsSlice.actions