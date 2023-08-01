import {createSlice} from '@reduxjs/toolkit'

const initialStateValue = [
    { id: 1, name: 'Nizam', img: { uri: 'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMjkxNjk3NDQ4ODI4/marveldisney.jpg' }, date: '12.55', call: 'zəng', gəlib: "zəng" },
    { id: 2, name: 'Amar', img: { uri: 'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMjkxNjk3NDQ4ODI4/marveldisney.jpg' }, date: '12.55', video: 'zəng', gedib: "zəng" },
    { id: 3, name: 'Cəsi', img: { uri: 'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMjkxNjk3NDQ4ODI4/marveldisney.jpg' }, date: '12.55', call: 'zəng', gedib: "zəng" },
    { id: 4, name: 'Tural', img: { uri: 'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMjkxNjk3NDQ4ODI4/marveldisney.jpg' }, date: '12.55', call: 'zəng', gəlib: "zəng" },
    { id: 5, name: 'Nəbi', img: { uri: 'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMjkxNjk3NDQ4ODI4/marveldisney.jpg' }, date: '12.55', video: 'zəng', gedib: "zəng" },
    { id: 6, name: 'Nəbi', img: { uri: 'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMjkxNjk3NDQ4ODI4/marveldisney.jpg' }, date: '12.55', video: 'zəng', gedib: "zəng" },

]

export const CallSlice = createSlice ({
    name:'Call',
    initialState:{value : initialStateValue},
    reducers:{
        callaction:(state , action)=>{
            state.value=action.payload
        }
    }
})

export const CallReducer = CallSlice.reducer
export const {callaction} = CallSlice.actions
