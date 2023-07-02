import { configureStore } from "@reduxjs/toolkit";
import bottomSheetSlice from "./slices/bottomSheetSlice";
import modalsSlice from "./slices/modalsSlice";

const store = configureStore({
    reducer: {
        bottomSheet: bottomSheetSlice,
        modal: modalsSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store