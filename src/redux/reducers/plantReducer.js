import * as constants from "../constants";

const initialState = {
    plants: [],
};

export const plantReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.ADD_PLANT:
            return {...state, plants: state.plants.concat([action.payload])};
        case constants.UPDATE_PLANTS:
            return {...state, plants: action.payload};
        default:
            return state;
    }
};