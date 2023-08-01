import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = [
    { id: 1, name: 'Nizam', img: { uri: 'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMjkxNjk3NDQ4ODI4/marveldisney.jpg' }, date: '12.55', message: 'Salam' },
    { id: 2, name: 'Amar', img: { uri: 'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMjkxNjk3NDQ4ODI4/marveldisney.jpg' }, date: '12.55', message: 'Salam', message1: '2' },
    { id: 3, name: 'Cəsi', img: { uri: 'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMjkxNjk3NDQ4ODI4/marveldisney.jpg' }, date: '12.55', message: 'Salam' },
    { id: 4, name: 'Tural', img: { uri: 'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMjkxNjk3NDQ4ODI4/marveldisney.jpg' }, date: '12.55', message: 'Salam', message1: '3' },
    { id: 5, name: 'Nəbi', img: { uri: 'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMjkxNjk3NDQ4ODI4/marveldisney.jpg' }, date: '12.55', message: 'Salam' },
    { id: 6, name: 'Qaqaş', img: { uri: 'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMjkxNjk3NDQ4ODI4/marveldisney.jpg' }, date: '12.55', message: 'Aleykum' },


]

export const ChatSlice = createSlice({
    name:'Cahat',
    initialState:{value:initialStateValue },
    reducers:{
        chataction :(state , action)=>{
            state.value = action.payload
        }
    }
})


export const ChatReducer = ChatSlice.reducer;
export const {chataction} =ChatSlice.actions