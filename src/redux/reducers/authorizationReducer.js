import * as constants from "../constants";

const initialState = {
    currentUser: {username: null, password: null},
};

export const authorizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.SIGN_IN:
            return {...state, currentUser: action.payload};
        case constants.LOGOUT:
            return {...state, currentUser: {username: null, password: null}};
        default:
            return state;
    }
};