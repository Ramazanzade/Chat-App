import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { ChatReducer } from "./features/ChatSlice";
const rootReducers = combineReducers({
    ChatReducer
})

export const setupStore = ()=>{
    return configureStore({
       reducer:rootReducers
})
}