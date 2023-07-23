import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IColor } from "../../types";


const initialState: IColor[] = [
    {
        color: '#C9CC41',
        isSelected: true
    },
    {
        color: '#66CC41',
        isSelected: false
    },
    {
        color: '#41CCA7',
        isSelected: false
    },
    {
        color: '#4181CC',
        isSelected: false
    },
    {
        color: '#41A2CC',
        isSelected: false
    },
    {
        color: '#CC8441',
        isSelected: false
    },
    {
        color: '#9741CC',
        isSelected: false
    },
    {
        color: '#CC4173',
        isSelected: false
    }
]

const colorsSlice = createSlice({
    name: 'colors',
    initialState,
    reducers: {
        selectColor: (state, {payload}: PayloadAction<string>) =>{
            state.find(item => item.color === payload ?
                item.isSelected = true :
                item.isSelected = false)
        }
    }
})


export default colorsSlice.reducer

export const {selectColor} = colorsSlice.actions