import {configureStore} from '@reduxjs/toolkit'
import {authorizationReducer} from "../reducers/authorizationReducer";
import {messageReducer} from "../reducers/messageReducer";
import {plantReducer} from "../reducers/plantReducer";

export const store = configureStore({
    reducer: {
        auth: authorizationReducer,
        message: messageReducer,
        plant: plantReducer
    }
})