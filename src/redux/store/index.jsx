import {configureStore} from '@reduxjs/toolkit'
import {authorizationReducer} from "../reducers/authorizationReducer";
import {messageReducer} from "../reducers/messageReducer";

export const store = configureStore({
    reducer: {
        auth: authorizationReducer,
        message: messageReducer,
    }
})