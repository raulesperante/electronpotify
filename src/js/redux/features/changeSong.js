import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    src: false,
    id: false,
};

export const changeSongSlice = createSlice({
    name: "changeSong",
    initialState,
    reducers: {
        changeSong: (state, action) => {
            state.src = action.payload;
        },
        changeId: (state, action) => {
            state.id = action.payload;
        },
    },
});

export const { changeSong, changeId } = changeSongSlice.actions;

export default changeSongSlice.reducer;

