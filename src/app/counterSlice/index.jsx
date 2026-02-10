import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: 'counter',
    initialState: 10,
    reducers: {
        increaseby1 : (state) => { state + 1 },
        decreateby1 : (state) => { state -1 },
        increateby10 : (state) => { state + 10 },
        decreateby10 : (state) => { state -10 }
    }
})

export const {increaseby1, increateby10, decreateby1, decreateby10 } = counterSlice.actions;

export default createSlice.reducer;