import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ITask } from "../../types";


const initialState: ITask[] = [
    {
        text: 'Do Math Homework',
        check: false,
        completed: false,
        details: {
            date: 'Today At 16:45',
            category: 'University',
            priority: 1
        }
    },

    {
        text: 'Tack out dogs',
        check: false,
        completed: false,
        details: {
            date: 'Today At 18:20',
            category: 'Home',
            priority: 2
        }
    },

    {
        text: 'Business meeting with CEO',
        check: false,
        completed: false,
        details: {
            date: 'Today At 08:15',
            category: 'Work',
            priority: 3
        }
    },

    {
        text: 'Buy Grocery',
        check: false,
        completed: true,
        details: {
            date: 'Today At 16:45',
        }
    }
]

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, {payload}: PayloadAction<ITask>) =>{
            state.push(payload)
        }
    }
})

export default tasksSlice.reducer

export const {addTask} = tasksSlice.actions