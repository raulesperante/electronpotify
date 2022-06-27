import { configureStore } from "@reduxjs/toolkit";
import changeSongReducer from "./features/changeSong";

export const store = configureStore({
    reducer: {
        changeSong: changeSongReducer,
    },
});
