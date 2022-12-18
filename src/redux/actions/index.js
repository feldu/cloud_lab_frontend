import * as constants from "../constants";

export const signIn = currentUser => ({
    type: constants.SIGN_IN,
    payload: currentUser
});
export const logout = () => ({
    type: constants.LOGOUT,
});

export const showMessage = message => ({
    type: constants.SHOW_MESSAGE,
    payload: message
});

export const hideMessage = () => ({
    type: constants.HIDE_MESSAGE,
});

export const updatePlants = plants => ({
    type: constants.UPDATE_PLANTS,
    payload: plants
});

export const addPlant = plant => ({
    type: constants.ADD_PLANT,
    payload: plant
});