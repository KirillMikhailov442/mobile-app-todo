import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ICategory } from "../../types";

const initialState: ICategory[] = [
    {
        text: 'Grecory',
        color: '#FF9680',
        iconColor: "#A31D00",
        iconName: 'bread'
    },
]

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addCategory: (state, {payload}: PayloadAction<ICategory>) =>{
            state.push(payload)
        }
    }
})

export default categoriesSlice.reducer

export const {addCategory} = categoriesSlice.actions