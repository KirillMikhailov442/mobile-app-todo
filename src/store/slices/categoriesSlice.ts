import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ICategory } from '../../types';

const initialState: ICategory[] = [
    {
        text: 'Grecory',
        color: '#CCFF80',
        iconColor: '#21A300',
        iconName: 'baguette'
    },
    {
        text: 'Work',
        color: '#FF9680',
        iconColor: '#A31D00',
        iconName: 'briefcase'
    },
    {
        text: 'Sport',
        color: '#80FFFF',
        iconColor: '#00A32F',
        iconName: 'dumbbell'
    },
    {
        text: 'Design',
        color: '#80FFD9',
        iconColor: '#00A372',
        iconName: 'arrange-send-to-back'
    },
    {
        text: 'University',
        color: '#809CFF',
        iconColor: '#0055A3',
        iconName: 'school'
    },
    {
        text: 'Social',
        color: '#FF80EB',
        iconColor: '#A30089',
        iconName: 'bullhorn'
    },
    {
        text: 'Music',
        color: '#FC80FF',
        iconColor: '#A000A3',
        iconName: 'music'
    },
    {
        text: 'Health',
        color: '#80FFA3',
        iconColor: '#00A3A3',
        iconName: 'heart-pulse'
    },
    {
        text: 'Movie',
        color: '#80D1FF',
        iconColor: '#0069A3',
        iconName: 'video'
    },
    {
        text: 'Home',
        color: '#FFCC80',
        iconColor: '#A36200',
        iconName: 'home'
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