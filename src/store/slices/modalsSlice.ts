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

            state.forEach((modal, index) => {
                if(modal.name === payload) state[index] = {...modal, showModal: true}
                
                else{ state[index] = {...modal, showModal: false} }
            })

        },

        hideModal: (state, {payload}: PayloadAction<string>) => {

            state.forEach((modal, index) => state[index] = {...modal, showModal: false})

        }
    }
})

export default modalsSlice.reducer

export const {showModal, hideModal} = modalsSlice.actions