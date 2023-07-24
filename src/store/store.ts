import { configureStore } from "@reduxjs/toolkit";

import modalsSlice from "./slices/modalsSlice";
import bottomSheetSlice from "./slices/bottomSheetSlice";
import prioritySlice from "./slices/prioritySlice";
import categoriesSlice from "./slices/categoriesSlice";
import colorsSlice from "./slices/colorsSlice";
import tasksSlice from "./slices/tasksSlice";

export const store = configureStore({
    reducer: {
        modals: modalsSlice,
        bottomSheets: bottomSheetSlice,
        priorities: prioritySlice,
        categories: categoriesSlice,
        colors: colorsSlice,
        tasks: tasksSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
