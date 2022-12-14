import * as constants from "../constants";

export const signIn = currentUser => ({
    type: constants.SIGN_IN,
    payload: currentUser
});
export const signOut = () => ({
    type: constants.SIGN_OUT,
});

export const showMessage = message => ({
    type: constants.SHOW_MESSAGE,
    payload: message
});

export const hideMessage = () => ({
    type: constants.HIDE_MESSAGE,
});
