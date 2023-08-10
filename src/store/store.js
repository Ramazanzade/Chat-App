import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { ChatReducer } from "./features/ChatSlice";
import {CallReducer} from './features/CallSlice'
import {ProfilerReducer} from './features/ProfileSlice'
import {Messagereducer} from './features/Messagesend'
import { LoginRegisterreducer } from "./features/LoginRegisterStore/LoginregistrSlice";
const rootReducers = combineReducers({
    ChatReducer,
    CallReducer,
    ProfilerReducer,
    Messagereducer,
    LoginRegisterreducer
})

export const setupStore = ()=>{
    return configureStore({
       reducer:rootReducers
})
}