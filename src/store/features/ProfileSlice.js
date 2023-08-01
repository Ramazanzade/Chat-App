import {createSlice} from '@reduxjs/toolkit'

const initialStateValue =  [
    { id: 1, text: 'Language' },
    { id: 2, text: 'Display' },
    { id: 3, text: 'Backroung' },
    { id: 4, text: 'Size' },
    { id: 5, text: 'Font' },
]

export const ProfileSlice = createSlice({
    name:"Profile",
    initialState :{value:initialStateValue},
    reducers:{
        profileaction:(state , action)=>{
            state.value=action.payload
        }
    }
})

export const ProfilerReducer = ProfileSlice.reducer;
export const {profileaction} =ProfileSlice.actions