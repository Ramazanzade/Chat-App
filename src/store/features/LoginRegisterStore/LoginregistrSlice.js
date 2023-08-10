import { createSlice } from "@reduxjs/toolkit";
import { userdelete, usergetall, userregister } from "./useraction";

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
            state.value = action.payload
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

        })
        builder.addCase(usergetall.pending, (state, action) => {
            state.loading = true,
             state.error = null

        }),
        builder.addCase(usergetall.fulfilled, (state, action) => {
            state.loading = false,
            state.user = action.payload;

        }),
        builder.addCase(usergetall.rejected, (state, action) => {
            state.loading = false,
            state.error = action.error.message;

        })
        builder.addCase(userdelete.pending, (state, action) => {
            state.loading = true,
             state.error = null

        }),
        builder.addCase(userdelete.fulfilled, (state, action) => {
            state.loading = false,
            state.user = null;

        }),
        builder.addCase(userdelete.rejected, (state, action) => {
            state.loading = false,
            state.error = action.error.message;

        })
    }
})


export const LoginRegisterreducer = LoginregisterSlice.reducer
export const { loginsucces } = LoginregisterSlice.actions