 import { createSlice } from "@reduxjs/toolkit";
 const initialStateValue = [
    {
        id: 1, text: 'bdhjsdhkwbhjakjd jamshdwkjdb jgdckjdc sjhdgcs ', date: '12/55'
    },
    {
        id: 2, text: 'bdhjsdhkwbhjakjd jamshdwkjdb jgdckjdc sjhdgcs ', date: '12/55'
    },
    {
        id: 3, text: 'bdhjsdhkwbhjakjd jamshdwkjdb jgdckjdc sjhdgcs ', date: '12/55'
    },
    {
        id: 4, text: 'bdhjsdhkwbhjakjd jamshdwkjdb jgdckjdc sjhdgcs ', date: '12/55'
    },
    {
        id: 5, text: 'bdhjsdhkwbhjakjd jamshdwkjdb jgdckjdc sjhdgcs ', date: '12/55'
    },
    {
        id: 6, text: 'bdhjsdhkwbhjakjd jamshdwkjdb jgdckjdc sjhdgcs ', date: '12/55'
    },
    {
        id: 7, text: 'bdhjsdhkwbhjakjd jamshdwkjdb jgdckjdc sjhdgcs ', date: '12/55'
    },
    {
        id: 8, text: 'bdhjsdhkwbhjakjd jamshdwkjdb jgdckjdc sjhdgcs ', date: '12/55'
    },
    {
        id: 9, text: 'bdhjsdhkwbhjakjd jamshdwkjdb jgdckjdc sjhdgcs ', date: '12/55'
    },
    
    {
        id: 10, text: 'bdhjsdhkwbhjakjd jamshdwkjdb jgdckjdc sjhdgcs ', date: '12/55'
    },


]


export const Messageslice = createSlice({
    name:'message',
    initialState:{value:initialStateValue},
    reducers:{
       messageaction:(state, action)=>{
        state.value=action.payload
       } 
    }
})

export const Messagereducer = Messageslice.reducer
export const {messageaction}= Messageslice.actions