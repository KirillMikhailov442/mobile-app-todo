import { configureStore } from "@reduxjs/toolkit";

import modalsSlice from "./slices/modalsSlice";
import bottomSheetSlice from "./slices/bottomSheetSlice";

export const store = configureStore({
    reducer: {
        modals: modalsSlice,
        bottomSheets: bottomSheetSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
