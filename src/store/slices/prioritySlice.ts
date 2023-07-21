import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPriority } from "../../types";



const initialState: IPriority[] = [
    {
        icon: 'flag',
        number: 1,
        isSelected: true
    },
    {
        icon: 'flag',
        number: 2,
        isSelected: false
    },
    {
        icon: 'flag',
        number: 3,
        isSelected: false
    },
    {
        icon: 'flag',
        number: 4,
        isSelected: false
    },
    {
        icon: 'flag',
        number: 5,
        isSelected: false
    },
    {
        icon: 'flag',
        number: 6,
        isSelected: false
    },
    {
        icon: 'flag',
        number: 7,
        isSelected: false
    },
    {
        icon: 'flag',
        number: 8,
        isSelected: false
    },
    {
        icon: 'flag',
        number: 9,
        isSelected: false
    },
    {
        icon: 'flag',
        number: 10,
        isSelected: false
    },
]


const prioritySlice = createSlice({
    name: 'priorities',
    initialState,
    reducers: {
        selectPriority: (state, {payload}: PayloadAction<number>) =>{
            state.find(item => item.number === payload ?
                item.isSelected = true : 
                item.isSelected = false)
        }
    }
})

export default prioritySlice.reducer

export const {selectPriority} = prioritySlice.actions