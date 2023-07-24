import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPriority } from "../../types";



const initialState: IPriority[] = [
    {
        number: 1,
        isSelected: true
    },
    {
        number: 2,
        isSelected: false
    },
    {
        number: 3,
        isSelected: false
    },
    {
        number: 4,
        isSelected: false
    },
    {
        number: 5,
        isSelected: false
    },
    {
        number: 6,
        isSelected: false
    },
    {
        number: 7,
        isSelected: false
    },
    {
        number: 8,
        isSelected: false
    },
    {
        number: 9,
        isSelected: false
    },
    {
        number: 10,
        isSelected: false
    },
]


const prioritySlice = createSlice({
    name: 'priorities',
    initialState,
    reducers: {
        selectPriority: (state, {payload}: PayloadAction<number>) =>{

            state.forEach((priority, index) =>{
                if(priority.number === payload) state[index] = {...priority, isSelected: true}

                else { state[index] = {...priority, isSelected: false} }
            })

        }
    }
})

export default prioritySlice.reducer

export const {selectPriority} = prioritySlice.actions