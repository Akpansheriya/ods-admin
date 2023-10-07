import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import actionReducer from "../slices/toggleSlice";

export const store = configureStore({
    reducer: {
        toggler: actionReducer,
    },
})
setupListeners(store.dispatch)