import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { ChatReducer } from "./features/ChatSlice";
import {CallReducer} from './features/CallSlice'
import {ProfilerReducer} from './features/ProfileSlice'
const rootReducers = combineReducers({
    ChatReducer,
    CallReducer,
    ProfilerReducer
})

export const setupStore = ()=>{
    return configureStore({
       reducer:rootReducers
})
}