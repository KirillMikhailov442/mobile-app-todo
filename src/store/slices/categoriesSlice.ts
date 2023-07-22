import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ICategory } from "../../types";

const initialState: ICategory[] = [
    {
        text: 'Grecory',
        color: '#CCFF80',
        iconColor: "#21A300",
        iconName: 'food'
    },
    {
        text: 'Work',
        color: '#FF9680',
        iconColor: "#A31D00",
        iconName: 'food'
    },
    {
        text: 'Sport',
        color: '#80FFFF',
        iconColor: "#00A32F",
        iconName: 'food'
    },
    {
        text: 'Design',
        color: '#80FFD9',
        iconColor: "#00A372",
        iconName: 'food'
    },
    {
        text: 'University',
        color: '#809CFF',
        iconColor: "#0055A3",
        iconName: 'food'
    },
    {
        text: 'Social',
        color: '#FF80EB',
        iconColor: "#A30089",
        iconName: 'food'
    },
    {
        text: 'Music',
        color: '#FC80FF',
        iconColor: "#A000A3",
        iconName: 'food'
    },
    {
        text: 'Health',
        color: '#80FFA3',
        iconColor: "#00A3A3",
        iconName: 'food'
    },
    {
        text: 'Movie',
        color: '#80D1FF',
        iconColor: "#0069A3",
        iconName: 'food'
    },
    {
        text: 'Home',
        color: '#FFCC80',
        iconColor: "#A36200",
        iconName: 'food'
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