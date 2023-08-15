import { createSlice } from "@reduxjs/toolkit";
import {  userregister } from "./useraction";

const initialStateValue = {
    user: null,
    loading: false,
    error: null
}

export const LoginregisterSlice = createSlice({
    name: 'User',
    initialState: initialStateValue,
    reducers: {
        loginsucces: (state, action) => {
            state.user = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(userregister.pending, (state, action) => {
            state.loading = true,
             state.error = null

        }),
        builder.addCase(userregister.fulfilled, (state, action) => {
            state.loading = false,
            state.user = action.payload;

        }),
        builder.addCase(userregister.rejected, (state, action) => {
            state.loading = false,
            state.error = action.error.message;
            console.error('Registration rejected:', action.error);

        })
      
    }
})


export const LoginRegisterreducer = LoginregisterSlice.reducer
export const { loginsucces } = LoginregisterSlice.actions